export const elements = {

    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    recipeListContainer : document.querySelector('.results'),
    recipeList: document.querySelector('.results__list'),
    recipeListBtnContainer: document.querySelector('.results__pages'),
    recipeDetailsContainer: document.querySelector('.recipe'),
    shoppingListContainer: document.querySelector('.shopping__list'),
    likesMenu: document.querySelector('.likes__field'),
    likesMenuList: document.querySelector('.likes__list')
     
}

const elementStrings = {
    loader: 'loader'
};

export const addLoader = (parent) => {
    const loader = `
    <div class="${elementStrings.loader}">
        <svg>
            <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>    
    `
    parent.insertAdjacentHTML("afterbegin", loader);

};

export const removeLoader = () => {

    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader){
        loader.parentElement.removeChild(loader);
    }

};