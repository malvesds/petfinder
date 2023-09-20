import { Request, Response } from "express";
import * as menuHelper from '../helpers/menuObject';
import {Pet} from '../models/pet.model';

export const home = (req: Request, res: Response) => {
  let petList = Pet.getAll();

  res.render('pages/page', {    
    banner: {
      title: 'Todos os animais',
      bg: 'allanimals.jpg'
    },
    menu: menuHelper.menuObject('all'),
    petList
  });
};

export const dogs = (req: Request, res: Response) => {
  let petList = Pet.getFromType('dog');
  res.render('pages/page', {
    banner: {
      title: 'Cachorros',
      bg: 'banner_dog.jpg'
    },
    menu: menuHelper.menuObject('dogs'),
    petList
  });
};

export const cats = (req: Request, res: Response) => {
  let petList = Pet.getFromType('cat');  
  res.render('pages/page', {
    banner: {
      title: 'Gatos',
      bg: 'banner_cat.jpg'
    },
    menu: menuHelper.menuObject('cats'),
    petList
  });
};

export const fishes = (req: Request, res: Response) => {
  let petList = Pet.getFromType('fish');
  res.render('pages/page', {
    banner: {
      title: 'Peixes',
      bg: 'banner_fish.jpg'
    },
    menu: menuHelper.menuObject('fishes'),
    petList
  });
};