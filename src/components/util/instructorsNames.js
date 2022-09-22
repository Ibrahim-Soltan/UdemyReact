const getInstructorsNames = (instructorsNames,instructor,idx)=>idx===0?instructor.name:instructorsNames +", "+instructor.name;

export default getInstructorsNames;