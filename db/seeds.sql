INSERT INTO department (name)
VALUES
  ('Human Resources'),
  ('Accounting'),
  ('Legal'),
  ('Research & Development'),
  ('Marketing'),
  ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Coordinator', 80000, 1),
  ('HR Manager', 120000, 1),
  ('Accountant', 100000, 2),
  ('Account Manager', 140000, 2),
  ('Lawyer', 150000, 3),
  ('Legal Team Lead', 215000, 3),
  ('Consultant', 100000, 4),
  ('R&D Lead', 140000, 4),
  ('Advertisement Rep', 90000, 5),
  ('Brand Lead', 130000, 5),
  ('Salesperson', 70000, 6),
  ('Sales Lead', 110000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Adam', 'Craw', 2, null),
  ('Patrick', 'Frasier', 1, 1),
  ('Robert', 'Plendy', 1, 1),
  ('Peter', 'Bulumey', 4, null),
  ('Derek', 'Mathers', 3, 4),
  ('Pamela', 'Darry', 3, 4),
  ('Heather', 'Willis', 6, null),
  ('Patricia', 'Delancey', 5, 7),
  ('Tony', 'Duvert', 5, 7),
  ('Denise', 'Cooper', 8, null),
  ('Aubrey', 'Mott', 7, 10),
  ('Tulse', 'Luper', 7, 10),
  ('Bradley', 'Morris', 10, null),
  ('George', 'Shaw', 9, 13),
  ('Ashley', 'Mayal', 9, 13),
  ('Fred', 'Nonan', 9, 13),
  ('Harriet', 'Martineau', 12, null),
  ('Meredith', 'Georges', 11, 17),
  ('Margaret', 'Olthow', 11, 17),
  ('Hubert', 'Nathans', 11, 17);