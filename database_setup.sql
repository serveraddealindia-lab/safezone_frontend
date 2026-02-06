-- Fire Safety Platform Database Setup Script
-- Run this script in phpMyAdmin to create all tables

-- Create database (uncomment if needed)
-- CREATE DATABASE IF NOT EXISTS fire_safety_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- USE fire_safety_db;

-- Drop tables if they exist (in reverse order of dependencies)
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS contact_leads;
DROP TABLE IF EXISTS careers;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS product_categories;
DROP TABLE IF EXISTS markets;
DROP TABLE IF EXISTS services;
DROP TABLE IF EXISTS banners;
DROP TABLE IF EXISTS users;

-- Create users table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user') NOT NULL DEFAULT 'user',
  INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create product_categories table
CREATE TABLE product_categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  INDEX idx_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create products table
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  short_desc TEXT,
  long_desc TEXT,
  image VARCHAR(255),
  pdf VARCHAR(255),
  datasheet VARCHAR(255),
  FOREIGN KEY (category_id) REFERENCES product_categories(id) ON DELETE CASCADE,
  INDEX idx_category (category_id),
  INDEX idx_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create markets table
CREATE TABLE markets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  INDEX idx_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create services table
CREATE TABLE services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  icon VARCHAR(255),
  INDEX idx_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create banners table
CREATE TABLE banners (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  image VARCHAR(255),
  order_no INT,
  INDEX idx_order (order_no)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create careers table
CREATE TABLE careers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  type VARCHAR(100) NOT NULL,
  department VARCHAR(255) NOT NULL,
  description TEXT,
  requirements TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_active (is_active),
  INDEX idx_department (department)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create contact_leads table
CREATE TABLE contact_leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('new', 'contacted', 'resolved') DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_status (status),
  INDEX idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create projects table
CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  country VARCHAR(100) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  year INT,
  status ENUM('completed', 'ongoing', 'planned') DEFAULT 'completed',
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_country (country),
  INDEX idx_status (status),
  INDEX idx_category (category),
  INDEX idx_year (year)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample data

-- Insert default admin user
-- IMPORTANT: The password hash below is for 'admin123'
-- To generate a new password hash, use Node.js:
-- const bcrypt = require('bcrypt');
-- const hash = await bcrypt.hash('yourpassword', 10);
-- Or use the backend register endpoint after creating the first admin manually
INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@firesafety.com', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');
-- Default password: admin123
-- CHANGE THIS PASSWORD IMMEDIATELY after first login!

-- Insert product categories
INSERT INTO product_categories (name) VALUES
('Fire Extinguishers'),
('Fire Alarms'),
('Sprinkler Systems'),
('Emergency Lighting'),
('Fire Doors'),
('Smoke Detectors');

-- Insert sample products
INSERT INTO products (category_id, name, short_desc, long_desc, image, pdf) VALUES
(1, 'ABC Fire Extinguisher', 'Multi-purpose fire extinguisher for various fire types', 'Our ABC Fire Extinguisher is a versatile solution for protecting your property from different types of fires. It uses a dry chemical powder that effectively suppresses fires involving ordinary combustibles, flammable liquids, and electrical equipment.', 'https://via.placeholder.com/400x300/DC2626/FFFFFF?text=ABC+Extinguisher', NULL),
(1, 'CO2 Fire Extinguisher', 'Ideal for electrical and flammable liquid fires', 'CO2 fire extinguishers are perfect for electrical fires and flammable liquid fires. They leave no residue and are safe for use around sensitive equipment.', 'https://via.placeholder.com/400x300/991B1B/FFFFFF?text=CO2+Extinguisher', NULL),
(2, 'Addressable Fire Alarm System', 'Advanced addressable fire detection system', 'State-of-the-art addressable fire alarm system with intelligent detection capabilities. Provides precise location identification and advanced monitoring features.', 'https://via.placeholder.com/400x300/B91C1C/FFFFFF?text=Addressable+Alarm', NULL),
(2, 'Conventional Fire Alarm System', 'Reliable conventional fire alarm system', 'Traditional and reliable fire alarm system suitable for small to medium-sized buildings. Easy to install and maintain.', 'https://via.placeholder.com/400x300/7F1D1D/FFFFFF?text=Conventional+Alarm', NULL),
(3, 'Wet Sprinkler System', 'Automatic wet pipe sprinkler system', 'Wet pipe sprinkler systems are the most common type of fire sprinkler system. They are reliable, cost-effective, and suitable for most building types.', 'https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Wet+Sprinkler', NULL),
(3, 'Dry Sprinkler System', 'Dry pipe system for cold environments', 'Dry pipe sprinkler systems are designed for areas where freezing temperatures are a concern. Ideal for unheated warehouses and parking garages.', 'https://via.placeholder.com/400x300/991B1B/FFFFFF?text=Dry+Sprinkler', NULL),
(4, 'Emergency Exit Light', 'LED emergency exit lighting system', 'High-efficiency LED emergency exit lighting that provides clear visibility during power outages. Long-lasting and energy-efficient.', 'https://via.placeholder.com/400x300/B91C1C/FFFFFF?text=Exit+Light', NULL),
(4, 'Emergency Backup Light', 'Battery backup emergency lighting', 'Reliable battery backup emergency lighting system that automatically activates during power failures. Ensures safe evacuation routes.', 'https://via.placeholder.com/400x300/7F1D1D/FFFFFF?text=Backup+Light', NULL);

-- Insert sample markets
INSERT INTO markets (name, description, image) VALUES
('Commercial Buildings', 'Comprehensive fire safety solutions for office buildings, retail spaces, and commercial facilities.', 'https://via.placeholder.com/600x400/DC2626/FFFFFF?text=Commercial'),
('Industrial Facilities', 'Specialized fire protection for manufacturing plants, warehouses, and industrial complexes.', 'https://via.placeholder.com/600x400/991B1B/FFFFFF?text=Industrial'),
('Residential Complexes', 'Reliable fire safety systems for apartments, condominiums, and residential developments.', 'https://via.placeholder.com/600x400/B91C1C/FFFFFF?text=Residential'),
('Healthcare Facilities', 'Critical fire safety systems designed for hospitals, clinics, and medical centers.', 'https://via.placeholder.com/600x400/7F1D1D/FFFFFF?text=Healthcare'),
('Educational Institutions', 'Safe learning environments with comprehensive fire safety for schools and universities.', 'https://via.placeholder.com/600x400/DC2626/FFFFFF?text=Education'),
('Hospitality Sector', 'Guest safety and property protection for hotels, resorts, and hospitality venues.', 'https://via.placeholder.com/600x400/991B1B/FFFFFF?text=Hospitality');

-- Insert sample services
INSERT INTO services (name, description, icon) VALUES
('Installation', 'Professional installation of fire safety systems by certified technicians.', 'shield'),
('Maintenance', 'Regular maintenance to ensure your fire safety systems are always operational.', 'zap'),
('Inspection', 'Comprehensive safety inspections and testing to meet regulatory requirements.', 'award'),
('Training', 'Fire safety training programs for your team to ensure proper emergency response.', 'users'),
('Repair & Service', 'Quick and reliable repair services to restore your fire safety systems.', 'wrench'),
('Compliance', 'Ensure your facility meets all fire safety codes and regulations.', 'file-check');

-- Insert sample banners
INSERT INTO banners (title, image, order_no) VALUES
('Advanced Fire Safety Solutions', 'https://via.placeholder.com/1920x800/DC2626/FFFFFF?text=Fire+Safety+Solutions', 1),
('Comprehensive Safety Systems', 'https://via.placeholder.com/1920x800/991B1B/FFFFFF?text=Complete+Protection', 2),
('Expert Installation & Service', 'https://via.placeholder.com/1920x800/B91C1C/FFFFFF?text=Expert+Service', 3);

-- Insert sample projects
INSERT INTO projects (title, location, country, description, image, year, status, category) VALUES
('Dubai Airport Fire Safety System', 'Dubai', 'UAE', 'Comprehensive fire safety system installation for Dubai International Airport terminals.', 'https://via.placeholder.com/600x400/DC2626/FFFFFF?text=Dubai+Airport', 2023, 'completed', 'Airport'),
('Abu Dhabi Mall Fire Protection', 'Abu Dhabi', 'UAE', 'Advanced fire suppression and detection systems for premium shopping mall.', 'https://via.placeholder.com/600x400/991B1B/FFFFFF?text=Abu+Dhabi+Mall', 2023, 'completed', 'Commercial'),
('Riyadh Hospital Fire Safety', 'Riyadh', 'Saudi Arabia', 'State-of-the-art fire safety infrastructure for major hospital complex.', 'https://via.placeholder.com/600x400/B91C1C/FFFFFF?text=Riyadh+Hospital', 2022, 'completed', 'Healthcare'),
('Muscat Industrial Complex', 'Muscat', 'Oman', 'Fire protection systems for large-scale industrial manufacturing facility.', 'https://via.placeholder.com/600x400/7F1D1D/FFFFFF?text=Muscat+Industry', 2023, 'completed', 'Industrial'),
('Mumbai High-rise Residential', 'Mumbai', 'India', 'Fire safety solutions for luxury residential towers.', 'https://via.placeholder.com/600x400/DC2626/FFFFFF?text=Mumbai+Residential', 2022, 'completed', 'Residential'),
('Kuwait Oil Refinery', 'Kuwait City', 'Kuwait', 'Specialized fire suppression systems for oil and gas processing facility.', 'https://via.placeholder.com/600x400/991B1B/FFFFFF?text=Kuwait+Refinery', 2023, 'ongoing', 'Industrial');

-- Insert sample careers
INSERT INTO careers (title, location, type, department, description, requirements, is_active) VALUES
('Fire Safety Engineer', 'Dubai, UAE', 'Full-time', 'Engineering', 'We are seeking an experienced Fire Safety Engineer to design and implement fire safety systems.', 'Bachelor degree in Engineering, 5+ years experience, Professional certification preferred', TRUE),
('Installation Technician', 'Abu Dhabi, UAE', 'Full-time', 'Operations', 'Join our installation team to install and maintain fire safety systems across various projects.', 'Technical diploma, 2+ years experience, Valid driver license', TRUE),
('Sales Representative', 'Sharjah, UAE', 'Full-time', 'Sales', 'Looking for a motivated sales professional to expand our client base and drive business growth.', 'Bachelor degree, 3+ years sales experience, Excellent communication skills', TRUE),
('Project Manager', 'Dubai, UAE', 'Full-time', 'Project Management', 'Manage fire safety projects from conception to completion, ensuring quality and timely delivery.', 'PMP certification, 5+ years project management experience, Strong leadership skills', TRUE),
('Quality Assurance Specialist', 'Dubai, UAE', 'Full-time', 'Quality', 'Ensure all fire safety systems meet industry standards and regulatory compliance requirements.', 'Quality certification, 3+ years QA experience, Attention to detail', TRUE),
('Customer Support Specialist', 'Abu Dhabi, UAE', 'Full-time', 'Support', 'Provide excellent customer service and technical support to our clients and partners.', 'Customer service experience, Technical knowledge, Problem-solving skills', TRUE);

-- Display success message
SELECT 'Database setup completed successfully!' AS message;
SELECT 'Total tables created: 8' AS info;
SELECT 'Sample data inserted' AS info;

