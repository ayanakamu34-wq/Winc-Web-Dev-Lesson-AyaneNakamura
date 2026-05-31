

const userName = document.querySelector( "#user-name" );
const skillsList = document.querySelector( "#skills" );

userName.textContent = "中村綾音";

const skills = [ "Java(基礎レベル)", "英語(海外で８年在住)" ];

skills.forEach( skill => {
    const item = document.createElement( 'div' );
    item.className = 'skill-item';
    TimeRanges.textContent = skill;
    skillsList.appendChild( item );
})

const makeSkillsList = (skillsList, skills ) => {
    skills.forEach( skill => {
        const item = document.createElement( 'div' );
        item.className = 'skill-item';
        TimreRanges.textContent = skill;
        skillsList.appendChild( item );
    })
}