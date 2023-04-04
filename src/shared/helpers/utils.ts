export const shortenText = (text: string, limit: number) : string => {
  return text.length > limit ? `${text.substring(0, limit)}...` : text;
};

export const capitalizeText = (text: string) : string => {
  const words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
};

export const refactorList = (data: any[]): { value: number; text: string }[] => {
  let arr : { value: number; text: string; }[] = [];
  data.filter(item => {
    arr.push({
      value: item.id,
      text: item.name
    });
  });
  return arr;
};

export const refactorItem = (item: {
  name: string;
  id: number;
}): { value: number | string; text: string } => {
  return {
    value: item ? item.id : '',
    text: item ? item.name : ''
  };
};


export const refactorRoleList = (data: any[]): { value: number; text: string }[] => {
  let arr : { value: number; text: string; }[] = [];
  data.filter(item => {
    arr.push({
      value: item.id,
      text: item.name
    });
  });
  return arr;
};

export const getProductsByGroup = (products: [], title: string, text: string) => {
  let arr = [];
  products.filter(product => {
    
    const { category, gender, sizes, brand } = product;
    // @ts-ignore
    const  size = sizes.find(item => item.name === text);
    
    // @ts-ignore
    if (title === 'CATEGORY' && category.name === text) {
      arr.push(product);
      // @ts-ignore
    } else if (title === 'GENRE' && gender.name === text) {
      arr.push(product);
      // @ts-ignore
    } else if (title === 'TAILLE' && size && size.name === text) {
      arr.push(product);
      // @ts-ignore
    } else if (title === 'MARQUE' && brand.name === text) {
      arr.push(product);
    }
  });
  return arr.length;
};
