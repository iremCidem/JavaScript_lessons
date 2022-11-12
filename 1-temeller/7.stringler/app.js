let value;

const firstname="irem";
const lastname="cidem";
const langs="javascript,python,c++";

value = firstname + lastname;
value += "sero";  //value = value + "sero" demiş olduk.
value = firstname.length; // 4 verdi.
value = firstname.concat(" ",lastname," ",langs);
value = firstname.toUpperCase(); //hepsini büyük harfe çevirdik.
value = firstname[2]; //2.indexteki karakteri verdi.
value = firstname[firstname.length - 1]; //sonuncu karakteri verdi, stringin boyunu bilmediğimiz durumlarda kullanabiliriz.
value = firstname.indexOf("r"); //r' nin kaçıncı indexte olduğunu bize söylüyor.
value = langs.split(","); // virgül ile ayrılmış kısımları parçala.
value = langs.replace ("python","java");// python yerine java yazdık.
value = langs.includes ("python");// içinde python var mı diye baktı,true döndü.


console.log(value);