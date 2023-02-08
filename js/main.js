function consultaCep() {
  $.ajax({
    url: 'https://viacep.com.br/ws/04476395/json/',
    type: 'GET',
    success: function (response) {
      console.log(response)
    }
  })
}
