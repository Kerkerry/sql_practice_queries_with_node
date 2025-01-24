import mysql from 'mysql2';
console.log("Hello world");
const connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        port:3306,
        password:'',
        database:'demo'
    }
);

const connectquery=(q)=> connection.query(q,(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);  
})

const showTables=()=>{
    const q=`SHOW TABLES`;
    connectquery(q);
}

const createEmployeeTable=()=>{
    const q=`CREATE TABLE IF NOT EXISTS employees(
        id INT PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(50),
        second_name VARCHAR(50),
        depatment VARCHAR(50),
        salary double(10,2),
        profession VARCHAR(50)
    )`;
    connectquery(q);
}



const insertIntoEmployees=()=>{
    const q=`INSERT INTO employees (first_name, second_name, depatment, salary, profession) 
    VALUES ('Alice', 'Smith', 'Marketing', 60000.00, 'Marketing Manager'),
('Bob', 'Johnson', 'Sales', 75000.00, 'Sales Representative'),
('Charlie', 'Williams', 'Engineering', 90000.00, 'Software Engineer'),
('David', 'Brown', 'Finance', 80000.00, 'Financial Analyst'),
('Emily', 'Davis', 'HR', 65000.00, 'HR Specialist'),
('Frank', 'Miller', 'Marketing', 55000.00, 'Marketing Coordinator'),
('Grace', 'Wilson', 'Sales', 70000.00, 'Sales Manager'),
('Henry', 'Moore', 'Engineering', 85000.00, 'Data Scientist'),
('Isabella', 'Taylor', 'Finance', 95000.00, 'Accountant'),
('Jack', 'Anderson', 'HR', 60000.00, 'HR Generalist'),
('Kate', 'Thomas', 'Marketing', 70000.00, 'Content Writer'),
('Liam', 'Jackson', 'Sales', 80000.00, 'Business Development Manager'),
('Mia', 'White', 'Engineering', 100000.00, 'DevOps Engineer'),
('Noah', 'Harris', 'Finance', 75000.00, 'Budget Analyst'),
('Olivia', 'Martin', 'HR', 65000.00, 'Recruiter'),
('Peter', 'Thompson', 'Marketing', 60000.00, 'Social Media Manager'),
('Quinn', 'Garcia', 'Sales', 70000.00, 'Account Executive'),
('Ryan', 'Rodriguez', 'Engineering', 90000.00, 'QA Engineer'),
('Sophia', 'Clark', 'Finance', 85000.00, 'Investment Analyst'),
('Thomas', 'Lewis', 'HR', 70000.00, 'Training Specialist');`;
connectquery(q);
}

const alterTable=(tablename,newname)=>{
    const q=`ALTER TABLE ${tablename} RENAME TO ${newname};`;
    connectquery(q);
}

const dropTable=(tablename)=>{
    const q=`DROP TABLE ${tablename}`;
    connectquery(q);
}

const selectAll=()=>{
    const q=`SELECT * FROM employees`;
    connectquery(q);
}

const selectSecondMostearingEmployee=()=>{
    const q=`
    SELECT MAX(salary) as Second_Top FROM employees
    WHERE salary<(SELECT MAX(salary)  FROM employees);
    `;
    connectquery(q);
}



