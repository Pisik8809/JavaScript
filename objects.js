var carrot = {
 color: 'red',
    size: 'medium',
    toPlantCarrot: function (){
     console.log('Посадили морковку');
    },
    harvest: function (){
        store['carrot'] = carrot;
        }
};

var patato = {
 color: 'brown',
    size: 'medium',
    toPlantPatato: function (){
     console.log('Посадили картошку');
    },
    harvest: function (){
        store['patato'] = patato;
        }
};

var store = {
    square: '200sq.m.',
    temperature: '25gr',
    aeration: function() {
      var aero = prompt('Проветрим?');
      if (aero = true) {alert ('wind breathing!');
    }
      else {console.log('проветривание отменено');}
    }()
    }


   carrot.harvest();
   patato.harvest();
    console.log(store);
