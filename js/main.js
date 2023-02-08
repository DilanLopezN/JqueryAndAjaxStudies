function consultaCep() {
  let inputValue = document.getElementById('textId').value
  $.ajax({
    url: `https://viacep.com.br/ws/${inputValue}/json/`,
    type: 'GET',
    success: function (response) {
      console.log(response)
    }
  })
}
