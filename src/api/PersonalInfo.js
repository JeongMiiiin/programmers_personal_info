const setPersonalInfo = async () => {
    const response = await fetch('/web/src/data/new_data.json');
    const data = await response.json();

    if(!localStorage.getItem('personalInfo')){
        localStorage.setItem('personalInfo', JSON.stringify(data));
    }
    
}

const setCardStatus = () => {
  if (!localStorage.getItem('cardStatus')) {
    localStorage.setItem('cardStatus', JSON.stringify([]));
  }
}

export {setPersonalInfo, setCardStatus};