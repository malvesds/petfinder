type menuOptions = '' | 'all' | 'dogs' | 'cats' | 'fishes';

// Função para capturar o link ativo
export const menuObject = (activeMenu: menuOptions) => {
  let returnObj = {
    all: false,
    dogs: false,
    cats: false,
    fishes: false
  };
  if (activeMenu !== '') {
    returnObj[activeMenu] = true;
  }
  return returnObj
}