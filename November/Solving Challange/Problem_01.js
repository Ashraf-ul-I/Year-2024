const studentData=['AShraful islam','Rafique','Shafique','Rahim','Karim'];

const studenHandle=(allstudents,studentName)=>{

    const foundStudent = allstudents.find(item => item.includes(studentName));
    return foundStudent ? `${foundStudent} is found` : `${studentName} is not found`;

}

//another approach 

const studenHandleOld=(allstudents,studentName)=>{

    for(let i=0;i<allstudents.length;i++){
        if(allstudents[i]===studentName){
            console.log(`${studentName} is found there`)
        }
    }

}

studenHandleOld(studentData,'Rafique')

console.log(studenHandle(studentData,'AShraful islam'))