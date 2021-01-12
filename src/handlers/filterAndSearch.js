const filterSearchWrapper = (arr, form) => {
  const search = form.search.value.toLowerCase();
  const gender = form.Gender.value;
  const payMethodArray = Array.from(form.payment_method);
  const payMethod = payMethodArray
    .map((elt) => {
      if (elt.checked) {
        return elt.value;
      }
      return null;
    })
    .filter((e) => !!e);

  let newPro = [...arr];

  return filterAndSearch(newPro, search, gender, payMethod);
};

const filterAndSearch = (arr, searchStr, genderOpt, paymentType) => {
  if (searchStr) {
    arr = searchArray(arr, searchStr);
  }

  if (genderOpt) {
    arr = filterGender(arr, genderOpt);
  }

  if (paymentType.length >= 1) {
    arr = filterPaymentMethod(arr, paymentType);
  }

  return arr;
};

const filterGender = (arr, searchKey) => {
  return arr.filter((item) => item["Gender"] === searchKey);
};

const filterPaymentMethod = (arr, keywords) => {
  console.log(keywords);
  return arr.filter((item) => keywords.includes(item["PaymentMethod"]));
};

const searchArray = (arr, word) => {
  return arr.filter((hero) => {
    return (
      hero.FirstName.toLowerCase().includes(word) ||
      hero.LastName.toLowerCase().includes(word)
    );
  });
};

export default filterSearchWrapper;
