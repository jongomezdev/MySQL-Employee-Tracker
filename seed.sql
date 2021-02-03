USE employee_tracker;

INSERT INTO department (name)
VALUES ('Medical Staff'),
('Administrative'),
('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES ('Doctor', 300000.00, 1),
('Medical Assistant', 129000.00, 1),
('Receptionist', 30000.00, 2),
('Bookkeeper', 30000.00, 2),
('Digital Marketer', 80000.00, 3),
('Frontend Developer', 60000.00, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jayden', 'Seward', 2, 1),
('Lacy', 'Morris', 4, 3),
('Chad', 'Forest', 6, 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Nikolas', 'Abbott', 1),
('Braiden', 'Emmet', 3),
('Mackenzie', 'Pit', 5);

