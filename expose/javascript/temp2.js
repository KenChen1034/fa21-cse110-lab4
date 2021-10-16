let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function(){ console.log('Hello!');},
    'Favorite Teacher': {
        name: 'Thmoas Power',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE134' , 'VIS 41']
};
//student.greeting();
console.log(student.courseLoad[0]);