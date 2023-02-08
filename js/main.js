function consultaCep() {
  let inputValue = document.getElementById('textId').value
  $.ajax({
    url: `https://viacep.com.br/ws/${inputValue}/json/`,
    type: 'GET',
    success: function (response) {
      $('#log').text(response.logradouro)
      $('#bairro').text(response.bairro)
      $('#cidade').text(response.localidade)
    }
  })
}
