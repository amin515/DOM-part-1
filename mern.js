// const amin = document.querySelector('.box h1').style.color = "yellow";
// const de = document.querySelector('.box p')


// amin.innerHTML= 'Nur Amin'


// // console.log(amin.innerHTML);


// const anc = document.querySelector('.box , a');

// anc.innerHTML= 'MORE INFO';



const team = document.querySelector('.team')

devs.map(data => {

    console.log(document.querySelector('.team h1'));
    team.innerHTML += `
    
    <div class="team-member">
    <img src="${data.photo}">
    
    <h3>Id: ${data.id}</h3>
    <h2>Name: ${data.name}</h2>
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugiat?</span>
    <p>Location: ${data.loc}</p>
    <p class="p1">Age: ${data.age} Years</p>
</div>
    
    `
})










//==================student data ===============

const student1 = document.querySelector('.student table tbody')

stu.map((data, index) => {


    student1.innerHTML += `
    
    <tr>
     <td>${index +1}</td>
     <td>${data.Roll}</td>
     <td>${data.Name}</td>
     <td>${data.Loc}</td>
     <td>${data.Gender}</td>
     <td>${data.Bn}</td>
     <td>${data.En}</td>
     <td>${data.Math}</td>
     <td>${data.S}</td>
     <td>${data.SS}</td>
     <td>${data.Rel}</td>
     <td><img src="${data.photo}"></td>

     </tr>
    
    
    `
});








//==============family-phonebook==============

const ffamily = document.querySelector('.phone table tbody')

fam.map((data, index) => {
    ffamily.innerHTML += `
  
    <tr>
    <td>${index+1}</td>
    <td>${data.Name}</td>
    <td>${data.rel}</td>
    <td>${data.phn}</td>
    <td>${data.loc}</td>
    </tr>  
    `
})