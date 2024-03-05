// document.getElementById('id');
// document.getElementsByClassName('clasName');
// document.getElementsByTagName('tageName')
// alter net
// document.querySelector("id",'className', 'tage Selector'); select fist element from html
// document.querySelectorAll("id",'className', 'tage Selector'); select all element for html 


// --------Dom Manipulation--------

// tageName: return tage for element Node


// innerText: return the text content of the element and all childern 
// example
// let example= document.querySelector('div').innerText
// console.log(example) // show all text inside of div


// innerHtml: return all tag like a text
// let example= document.querySelector('body').innerHTML
// console.log(example) // show all text inside of html

// textContent : return textyal content even for hide Element


//--------attributes----------

//---------getAttribute----------

let A =document.querySelector("h1")
    let D=A.getAttribute("id")
    console.log(D)

//-----setAttribute------

let a =document.querySelector("h1")
    let d=a.setAttribute("id",'class')
    console.log(d)
