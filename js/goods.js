$('document').ready(function(){
    loadGoods();
  });
  
  function loadGoods() {
    //загрузка товаров в каталог
  $.getJSON('goods.json', function (data) {
    console.log(data);
      var out = '';
      for (var key in data){
        out+='<h3>'+data[key]['name']+'</h3>';
        out+='<p>Цена: '+data[key]['cost']+'</p>';
        out+='<img src="'+data[key].image+'">';         out+='<button>Купить</button>';
        out+='</div>';
    }
  $('#goods').html(out);
  })
  }