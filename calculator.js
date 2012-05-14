var saisie1;
var saisie2;
var operateur;
var resultat;
var memoire;

function reset()
{
    document.formul.reset();
}

function calcul()
{
    saisie2 = document.formul.aff.value;
    resultat = eval(saisie1 + operateur + saisie2);
    if(resultat == "Infinity")
        document.formul.aff.value = "Erreur !!";
    else
        document.formul.aff.value = resultat; 
}

function display(nb)
{
    if(document.formul.aff.value == '0' && (nb != "."))
    {
        document.formul.aff.value = nb;
    }
    else
    {
        if(document.formul.aff.value == '.')
        {
             reset();
             document.formul.aff.value = nb;
        }
        else if(document.formul.aff.value == resultat)
        {
            reset();
            document.formul.aff.value = nb;
        }
        else if(document.formul.aff.value == memoire)
        {
            reset();
            document.formul.aff.value = nb;
        }
        else if(document.formul.aff.value == saisie1)
        {
            reset();
            document.formul.aff.value = nb;
        }
        else
            document.formul.aff.value += nb;            
    }
}

function operator(oper)
{
    operateur = oper;
    saisie1 = document.formul.aff.value;
}

function mp()
{
    var mtemp;
    if(memoire == null)
        memoire = parseFloat(document.formul.aff.value);
    else
    {
        mtemp = parseFloat(document.formul.aff.value);
        memoire = memoire + mtemp;
    }
}

function mclean()
{
    memoire = 0;
}

function mrecup()
{
    document.formul.aff.value = memoire;
}

function mmoins()
{
    var mtemp;
    mtemp = parseFloat(document.formul.aff.value);
    memoire = memoire - mtemp;
}

function plmn()
{
    if(document.formul.aff.value.substr(0, 1) == "-")
        document.formul.aff.value = document.formul.aff.value.substr(1);
    else
        document.formul.aff.value = "-" + document.formul.aff.value;
}

function cgrey()
{
    document.getElementById('lien').href ="style.css";
}

function cfun()
{
    document.getElementById('lien').href ="fun.css";
//alert(document.linkslien.href);
//document.getElementById('calculette').style.backgroundColor='#00ff00';
}

function cpsg()
{
    document.getElementById('lien').href ="psg.css";
}

function cache(bol)
{
    if(bol == 'true')
    {
        document.getElementById('scient').value = "false";
        document.getElementById('hide').style.display = "block";
        document.getElementById('aff').style.width = "395px";
        document.getElementById('calculette').style.width = "407px";
    }
    else
    {
        document.getElementById('scient').value = "true";
        document.getElementById('hide').style.display = "none";
        document.getElementById('aff').style.width = "190px";
        document.getElementById('calculette').style.width = "204px";

    }
}

function loga()
{
    var logar = document.formul.aff.value;
    document.formul.aff.value = Math.log(logar)
    
}

function sinus()
{
    var sinu = document.formul.aff.value;
    document.formul.aff.value = Math.sin(sinu);
}

function arcsinus()
{
    var arcsinu = document.formul.aff.value;
    document.formul.aff.value = Math.asin(arcsinu);
}

function cosinus()
{
    var cosi = document.formul.aff.value;
    document.formul.aff.value = Math.cos(cosi);
}

function arccosinus()
{
    var acosi = document.formul.aff.value;
    document.formul.aff.value = Math.acos(acosi);
}

function tangente()
{
    var tang = document.formul.aff.value;
    document.formul.aff.value = Math.tan(tang);
}

function arctangente()
{
    var atang = document.formul.aff.value;
    document.formul.aff.value = Math.atan(atang);
}

function racine()
{
    var rac = document.formul.aff.value;
    document.formul.aff.value = Math.sqrt(rac);
}

function pi()
{
    document.formul.aff.value = Math.PI;
}

function ee()
{
    document.formul.aff.value = Math.E;
}

function exp()
{
    var expo = document.formul.aff.value;
    document.formul.aff.value = Math.exp(expo);
}

function rand()
{
    document.formul.aff.value = Math.random();
}

function parento()
{
    document.formul.aff.value = "(";
}

function parentf()
{
    document.formul.aff.value = ")";
}
