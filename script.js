// Første verdenskrig var en verdensomspennende storkrig med utgangspunkt i Europa som varte fra  ________ 
// Utbruddet av krigen blir ofte tilskrevet «skuddene i Sarajevo». ________
// Den første verdenskrig var en krig mellom to allianser. På den ene siden var ________ Og på den andre siden
// var Tyskland, Østerrike-Ungarn og Det osmanske riket, kjent som Sentralmaktene. Flere andre nasjoner sluttet 
// seg til de to alliansene i løpet av krigen. Blant annet sluttet USA seg til Ententemaktene i 1917.

const tekst = document.getElementById('tekst');
let ord1 = "________";
let ord2 = "________";
let ord3 = "________";
let ord4 = "________";
let ord5 = "________";
let ord6 = "________";
let ord7 = "________";

function ordEn(valg) {
    ord1 = valg.innerHTML;
    historie();
} 

function ordTo(valg) {
    ord2 = valg.innerHTML;
    historie();
}

function ordTre(valg) {
    ord3 = valg.innerHTML;
    historie();
}

function ordFire(valg) {
    ord4 = valg.innerHTML;
    historie();
}

function ordFem(valg) {
    ord5 = valg.innerHTML;
    historie();
}

function ordSeks(valg) {
    ord6 = valg.innerHTML;
    historie();
}

function ordSyv(valg) {
    ord7 = valg.innerHTML;
    historie();
}

function historie() { 
    tekst.innerHTML = `
    Første verdenskrig var en verdensomspennende storkrig med utgangspunkt i Europa som varte fra  ${ord1} 
    Utbruddet av krigen blir ofte tilskrevet «skuddene i Sarajevo». ${ord2}
    Den første verdenskrig var en krig mellom to allianser. På den ene siden var ${ord3} Og på den andre siden
    var Tyskland, Østerrike-Ungarn og Det osmanske riket, kjent som Sentralmaktene. Flere andre nasjoner sluttet seg
    til de to alliansene i løpet av krigen. Blant annet sluttet USA seg til Ententemaktene i 1917. <br><br>
    `
}

historie();