# -*- coding: utf-8 -*-
from app.infrastructure.apis.api import Api
import google.generativeai as genai

genai.configure(api_key = "AIzaSyCVWYqPrS6mkOhNv4LtJrOE4p87X7IX26c")

for m in genai.list_models():
    if 'generateContent' in m.supported_generation_methods:
        print(m.name)

model = genai.GenerativeModel('gemini-pro')

response = model.generate_content(""" 
    Esse texto foi extraído de um pdf a partir de um OCR. Em virtude disso, há muitos erros quanto à legibilidade do OCR. Preciso que você reescreva ele da forma mais coesa possível. 
    Aqui está o texto: 
    'DISTO. N.°

4 S53EAa ~AUDIÊNCIASSésSelee a se 22/01/80Ass.11550

a sensonanevensssungensovenersnaesteanseectvereos nannineonaseersnesnaneencstrensesenseesnsessen
Aoe SE Rei ¢

RECUO, PESSOA 1

AUAUTUAÇÃOSenipsmessmnarseawercusscumcmenmmm tttemnenseuecasnabecaurnaneaseereseaqsnencennennene -anomineeecarans

A Aos3 dias ddo méde. JaJameiro:e de fs:
penta

amenAmeneméscure tagageaennennnen:

My
YMilJUSJUSTIÇA TRATRAB.O|
J: Cone. JuJulgadDeNNazaréda Mata
Proc. J. C. WOSO

Livro NO

AnAntónioanoel Cosme,c, casadoresidente no Po-
voado CChaleiras 4 rua Web João, 0; Oberto Raios da Silva, soltei-
rRO residente na-cidade de AAliança h Travessa da Bela Vista, 17,
SSebastiãoVViseriteda Silva, casado, residente na cidade de AAliança
Serre Sila VVintã nnão 26, LuizViseritee daSilvaj solteiro,
e- residente na cidade de Alianca, & Travessa da Bela Viste, nnão 26)

. José Avelino da Silva, casado, residente na cidade deAliançaa,Tald doVozerioo, 62, todosbrasileiross, trabalhadores rurais, por
intermédio do seu advogado, infra~assinado, querem propor, como ppara o
posta tem, contra PESSOA DE MELLIND.ND E COM S/UsinaiAliançanga, em-
presa situada Municípiopio Aliançanga, desJurisdiçãogao, a presentReclamaçãogao Trabalhista, pelos motivos a seguexpostososs

1 - declaram os Reclamanteadmitidosos
nos sexvicosserviçosamada, como trabalhadores rurais, prestando sem
vigos sobijousordens do "“empreiteiro" José Vicente Ferreira, no Enge-
nho BainhôVerde, desta JurisdiJurisdiçãode setembro de 1978.

2 — declaram ainda que vén trabbematrabalhandoas
da semana, recebendo saldrio salárioda "produgaoproduçãodia Cr$ 800,Crupor semana, nao lhesna olhesagg 0 rpagg.so semanal remunerremuneradoe nao recenãoam até o momento o 132 saldrio
salário8,Deem o 132 saldrio salário. .

i . & = i. nao recebnãom férias. =
Yo wt ReqOreum pois, inconformados, a notificaganotificaçãoada, a fim de responder a todos os texmos da technoste, sob pena

*@e revelia, sendo ao final à final condenadaento de:
: repous:emanal remunerado, por todo o tempo de
servico indiserviçoté a presente data eoseese
erecjoseensebreve0
132 salfrio de 1salário. Cr1978.0,00 :
132 sald00:de 197salárioCrd 3.900eles
CDa cada um dos Reclamantes, :
mais juros, mora e corregao monetércorreçãoemonetáriaclamantes por todos 0s meios de
provas admitidos em Direito, inclusive depoimento pessoal do represen
tante lerepresentanteda, sob pena de econfesso, testemuconfessotada -
de documejuntadaerfcias e vistoriaperíciasrmovistoriasanés & presente, para efeito de algada o valor
de Craugada000 00
P. fore ates Nazaré da fora,ate Nazaré
VAL PEERS TYEREECRO A.B. PeerJ
TERCEIRO? ~ ~~ F

Peweeobtempere Waa SebPeixeodiie 8 AAsiSebastiãotreiv. aa.sim
JosSs.osliO daNeideaque
idence oa


a ab otaoIdeasseaist we .utd or

H yomistawe. UTCbor. anformada sorovaditoan.eirusfosorverO LadoertifFoi-ee DE 'dedignddo's
1 ia) J a dedignado at
OE te GDS todoes, —anian, paGÁSraalzesz0,
—a,miamiéncia ‘de instrucddá,jaudiênciao; doinstrução5envigamentonandoo qualficou one
imãe amanteono Botn
Sonomeondeqpertois a BomE
Sobastcorq, efeslv NESTE
eos, ocorreuicoutavou Vez
t SExibi>ob.chapice4
ob.péfecamen ¢ ab 9
Some “de ¢ JAE1fechamentog i éouricesjie t” o mor

SIG: bt ‘Fiéiset TVg oup ~ Abl%
bit ExocorteonONG,ouamroPDoonPB,digestidãopa8,ycobamrotaoont,rpiow.smeronpa.ebYoumeeord altMonroeovmosobe on ssebáceoge Lacalta zebiobnunciavy to.se. ACugageanJack
ve home OO9.2bóbi RED BOLDEsumer
Lamaceáovê geOEeferida roma.

»Bola

SIG
5CienteBou Bjê

fia

OD gu BRAS. 244,99 Sel.ugamei BitiBeman | .
O GevngasiotSAS erstesujaFob.cuitelãoent.nt ,oGinjazitaacbiviestesvoutFontefirievientlont,obteriaadivinhoesbati'

""")

print(response.text)

form = model.generate_content(f"A partir do texto {response.text}, preencha um formulário com as seguintes informações: Código, ano, processo, tipo Processo, JCJ, Resultado, Reclamante, Reclamado  e salve em formato JSON.")
print (form.text)
