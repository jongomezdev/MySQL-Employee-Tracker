DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INT AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employee(
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY(manager_id) REFERENCES employee(id)
);

INSERT INTO department(name)
VALUES ('Medical Staff'),
('Administrative'),
('Marketing');

INSERT INTO role(title, salary, department_id)
VALUES ('Doctor', 300000.00, 1),
('Medical Assistant', 129000.00, 1),
('Receptionist', 30000.00, 2),
('Bookkeeper', 30000.00, 2),
('Digital Marketer', 80000.00, 3),
('Frontend Developer', 60000.00, 3);


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Jayden', 'Seward', 2, 1),
('Nikolas', 'Abbott', 1, NULL),
('Lacy', 'Morris', 4, 3),
('Braiden', 'Emmet', 3, NULL),
('Chad', 'Forest', 6, 5),
('Mackenzie', 'Pit', 5, NULL);

