const prev = document.querySelector('.left');
const post = document.querySelector('.right');
const tag = document.querySelector('.tagLine');
const tagIntro = document.querySelector('.intro');
const mido = document.querySelector('.mid');
const pc = document.querySelector('#bg');

// mido.addEventListener('click', function() {
//     tag.innerHTML=`About our furniture`;
//     tagIntro.innerHTML=`Our multifunctional collection blends design and function to suit your individual taste.
//     Make each room unique, or pick a cohesive theme that best express your interests and what
//     inspires you. Find the furniture pieces you need, from traditional to contemporary styles
//     or anything in between. Product specialists are available to help you create your dream space.`;
// })


prev.addEventListener('click', function() {
    tag.innerHTML='We are available across the globe';
    tagIntro.innerHTML=`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
})

post.addEventListener('click', function() {
    tag.innerHTML='Manufactured with the best materials';
    tagIntro.innerHTML=`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`

})
