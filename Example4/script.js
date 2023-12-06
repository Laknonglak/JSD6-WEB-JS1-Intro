async function getRecipeSuggestions() {
  const url = 'https://tasty.p.rapidapi.com/recipes/list';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': ''//your own API,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log('Data:', data); 
    console.log('Data properties:', Object.keys(data));

    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = ''; // Clear the list

    console.log(recipeList);
    console.log('Data:', data); 
    console.log('Data length:', data.length);
    console.log('Entering if block');

    if (Array.isArray(data.results)) {
      console.log('Entering forEach loop');
      console.log('Recipe List:', recipeList);

      for (let i = 0; i < data.results.length; i++) {
        const recipe = data.results[i];
        console.log('Recipe:', recipe);
        console.log('Recipe Name:', recipe.name);

        const listItem = document.createElement('li');
        listItem.classList.add('recipeCard');

        const nameElement = document.createElement('p');
        nameElement.classList.add('recipeName');
        nameElement.textContent = recipe.name;

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('recipeDescription');
        descriptionElement.textContent = recipe.description;

        listItem.appendChild(nameElement);
        listItem.appendChild(descriptionElement);

        recipeList.appendChild(listItem);
      }
    } else {
      console.error('Data is not an array');
    }
  } catch (error) {
    console.error(error);
  }
}
