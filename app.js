// get access to all tabs and panels
const tab = [ ... document.querySelectorAll('[role=tab]')];
const panel = [ ... document.querySelectorAll('[role=tabpanel]')];

function handleTabClick(e){
    const panelToControl = e.currentTarget.getAttribute
    ('aria-controls');
    panelToControl.forEach(p => {
        p.setAttribute('aria-hidden', `${p.id === panelToControl ?
        'false' : 'true'}`)
    })
   
}


//on selection of tabs, show panel
tab.forEach(tab => {
    tab.addEventListener('click', handleTabClick)
})
//keyboard events