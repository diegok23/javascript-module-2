/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/

var mentors = [
  {
    firstName: 'Antonio',
    lastName: 'Miranda',
    skills: ['JS', 'React', 'Node'],
    class: 'Mar1',
    studentLikes: 0,
    job: {
      company: 'Google',
      position: 'Senior developer',
      city: 'Barcelona'
    }
  },
  {
    firstName: 'Leo',
    lastName: 'Messi',
    skills: ['Play football'],
    class: 'Mar3',
    studentLikes: 0,
    job: {
      company: 'FC Barcelona',
      position: 'Player',
      city: 'Barcelona'
    }
  },
  {
    firstName: 'John',
    lastName: 'VanDamme',
    skills: ['React', 'Angular', 'Python', 'Node'],
    class: 'Mar4',
    studentLikes: 0,
    job: {
      company: 'Facebook',
      position: 'Software Manager',
      city: 'Chicago'
    }
  },
  {
    firstName: 'Giorgio',
    lastName: 'Polvara',
    skills: ['HTML', 'JS', 'React'],
    class: 'Mar2',
    studentLikes: 0,
    job: {
      company: 'Amazon',
      position: 'Senior developer',
      city: 'Barcelona'
    }
  }
];

//YOUR CODE HERE

// Part 1
const barnaReact = mentors
  .filter((mentor) => mentor.job.city.includes('Barcelona') && mentor.skills.includes('React'))
  .forEach(function (mentor) {
    console.log(`Hi, my name is ${mentor.firstName} ${mentor.lastName}. I work in Barcelona and i know React.`);
  });

// Part 2
const barna = mentors.filter((mentor) => mentor.job.city.includes('Barcelona'));
barna.forEach((mentor) => {
  mentor.class = 'Jun1';
  mentor.skills.push('SQL');
});
//console.log(barna);

// Part 3
mentors.forEach(
  (mentor) =>
    (mentor.addSkill = function (skill) {
      this.skills.push(skill);
    })
);
//console.log(mentors);

// Part 4
function addSkill(mentors, newSkill) {
  mentors.forEach((mentor) => mentor.addSkill(newSkill));
}

addSkill(mentors, 'Singer');
//console.log(mentors);

// Part 5

function removeSkill(mentors, newSkill) {
  mentors.forEach((mentor) => {
    const skillIndex = mentor.skills.indexOf(newSkill);
    if (skillIndex !== -1) {
      mentor.skills.splice(skillIndex, 1);
    }
  });
}

removeSkill(mentors, 'SQL');
//console.log(mentors);

// Part 6

function mentorWithMoreSkills() {
  let mentorName = '';
  let mentorSkills = 0;
  mentors.forEach((mentor) => {
    if (mentor.skills.length > mentorSkills) {
      mentorSkills = mentor.skills.length;
      mentorName = mentor.firstName;
    }
  });
  //console.log(mentorSkills);
  return mentorName;
}
console.log(`The mentor with more number of skills is ${mentorWithMoreSkills()}`);

// Part 7

mentors.forEach((mentor) => {
  mentor.addStudentLikes = function () {
    this.studentLikes++;
  };
});

// Part 8

function addStudentLikes(mentors) {
  mentors.forEach((mentor) => {
    mentor.studentLikes++;
  });
}
