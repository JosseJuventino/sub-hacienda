export const applyMask = (value: string) => {
  const strippedValue = value.replace(/\D/g, "");
  if (strippedValue.length === 9) {
    return strippedValue.replace(/^(\d{8})(\d{1})$/, "$1-$2");
  } else if (strippedValue.length === 14) {
    return strippedValue.replace(
      /^(\d{4})(\d{6})(\d{3})(\d{1})$/,
      "$1-$2-$3-$4"
    );
  } else {
    return strippedValue;
  }
};


export const applyMaskTel = (value: string) => {
    const strippedValue = value.replace(/\D/g, '');
    return strippedValue.replace(/^(\d{15})$/, '$1');    
  };

  export const applyMaskNrc = (value: string)  => {
    const strippedValue = value.replace(/\D/g, '');
    if (strippedValue.length === 7) {
      return strippedValue.replace(/^(\d{6})(\d{1})$/, '$1-$2');
    } else {
      return strippedValue;
    }
  }


  