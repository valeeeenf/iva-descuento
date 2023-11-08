
//Iva
var calcular=document.getElementById('calcularIva');
var imprimir=document.getElementById('imprimirIva');
var iva;
calcular.addEventListener("click", function()
{
	var precio = document.getElementById('precioIva').value;
	precio=parseInt(precio);
	if(!isNaN(precio))
	{
		iva=(precio * 0.21);
		imprimir.innerHTML=iva;
	}
	else
	{
		imprimir.innerHTML="$0.0";
		alert("Error ingrese el precio del producto!!");
	}
});


//Descuentovar
var calcularDesc=document.getElementById('calcularDesc');
var imprimirDesc=document.getElementById('imprimirDesc');
var total, result;
calcularDesc.addEventListener("click", function()
{
	var precioDesc=document.getElementById('precioDesc').value;
	precioDesc=parseInt(precioDesc);
	var selectDesc=document.getElementById('selectDesc').value;
	switch(selectDesc)
	{
		case '10':
				selectDesc=0.1;
			break;
		case '20':
			selectDesc=0.2;
			break;
		case '30':
			selectDesc=0.3;
			break;
	}
	if(!isNaN(precioDesc))
	{
		total=precioDesc * selectDesc; //10%
		result=precioDesc - total;
		imprimirDesc.innerHTML="$"+result;
	}
	else
	{
		imprimirDesc.innerHTML="$0.0";
		alert("Error ingrese el precio del producto!!");
	}
});
