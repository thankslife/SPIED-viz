var reasons1=[[[{"reasonwords":["Jimmy Carter"],"patterns":["governor <b>X:NN:PERSON{3}</b> "],"score":0.5000000003474466,"entity":"Nelson Rockefeller"},{"reasonwords":["Jimmy Carter"],"patterns":["governor <b>X:NN:PERSON{3}</b> "],"score":0.4000000003474466,"entity":"James M. Cox"},{"reasonwords":["Jimmy Carter"],"patterns":["governor <b>X:NN:PERSON{3}</b> "],"score":0.5000000003474466,"entity":"Michael Dukakis"},{"reasonwords":["President Obama"],"patterns":[" <b>X:NN:PERSON{3}</b> be bear"],"score":0.4595848894536612,"entity":"Ronald Wilson Reagan"},{"reasonwords":["Jimmy Carter"],"patterns":["president <b>X:NN:PERSON{3}</b> "],"score":0.34755203539347124,"entity":"John Kennedy"}],[{"reasonwords":["Jimmy Carter","John Kennedy"],"patterns":["president <b>X:NN:PERSON{3}</b> "],"score":0.34755203539347124,"entity":"Hubert H. Humphrey"},{"reasonwords":["Jimmy Carter","John Kennedy"],"patterns":["president <b>X:NN:PERSON{3}</b> "],"score":0.33091835106875556,"entity":"Mikhail Gorbachev"},{"reasonwords":["Jimmy Carter","John Kennedy"],"patterns":["president <b>X:NN:PERSON{3}</b> "],"score":0.3246886777561562,"entity":"Saddam Hussein"},{"reasonwords":["Jimmy Carter","John Kennedy"],"patterns":["president <b>X:NN:PERSON{3}</b> "],"score":0.3642187020601379,"entity":"Al Gore"},{"reasonwords":["Jimmy Carter","John Kennedy"],"patterns":["president <b>X:NN:PERSON{3}</b> "],"score":0.34755203539347124,"entity":"Spiro T. Agnew"}],[{"reasonwords":["Jimmy Carter","Hubert H. Humphrey","Mikhail Gorbachev","John Kennedy","Saddam Hussein","Al Gore","Spiro T. Agnew"],"patterns":["president <b>X:NN:PERSON{3}</b> ","leader <b>X:NN:PERSON{3}</b> "],"score":0.3851944617409826,"entity":"Gerald R. Ford"},{"reasonwords":["Jimmy Carter","Hubert H. Humphrey","Mikhail Gorbachev","John Kennedy","Saddam Hussein","Al Gore","Spiro T. Agnew"],"patterns":["president <b>X:NN:PERSON{3}</b> "],"score":0.22393192878444862,"entity":"Taft"},{"reasonwords":["Mikhail Gorbachev"],"patterns":["leader <b>X:NN:PERSON{3}</b> "],"score":0.39604162208300997,"entity":"Leonid I. Brezhnev"},{"reasonwords":["Al Gore"],"patterns":[" <b>X:NN:PERSON{3}</b> jr."],"score":0.5176470590083263,"entity":"Albert Gore"},{"reasonwords":["Jimmy Carter","Hubert H. Humphrey","Mikhail Gorbachev","John Kennedy","Saddam Hussein","Al Gore","Spiro T. Agnew"],"patterns":["president <b>X:NN:PERSON{3}</b> "],"score":0.3571725698737782,"entity":"Richard M. Nixon"}],[{"reasonwords":["Albert Gore"],"patterns":["senator <b>X:NN:PERSON{3}</b> "],"score":0.4054129227747997,"entity":"Walter F. Mondale"},{"reasonwords":["Jimmy Carter","Leonid I. Brezhnev","Albert Gore","James M. Cox","Michael Dukakis","Ronald Wilson Reagan","Saddam Hussein","Al Gore","Spiro T. Agnew","Nelson Rockefeller","Gerald R. Ford","Hubert H. Humphrey","Mikhail Gorbachev","John Kennedy","President Obama","Richard M. Nixon","President Bush"],"patterns":["NAME <b>X:NN:PERSON{3}</b> "],"score":0.33266088917849773,"entity":"Gore Jr."},{"reasonwords":["Leonid I. Brezhnev"],"patterns":[" <b>X:NN:PERSON{3}</b> set"],"score":0.40067100413133006,"entity":"George W. Bush"},{"reasonwords":["Albert Gore"],"patterns":["senator <b>X:NN:PERSON{3}</b> "],"score":0.3922552091638608,"entity":"Dan Quayle"},{"reasonwords":["Albert Gore"],"patterns":["senator <b>X:NN:PERSON{3}</b> "],"score":0.3922552091638608,"entity":"John Kerry"}],[{"reasonwords":["Jimmy Carter","Gerald R. Ford","Taft","Hubert H. Humphrey","Mikhail Gorbachev","Ronald Wilson Reagan","John Kennedy","Saddam Hussein","President Obama","Al Gore","Richard M. Nixon","Spiro T. Agnew"],"patterns":["president <b>X:NN:PERSON{3}</b> "," <b>X:NN:PERSON{3}</b> be bear"],"score":0.20797589509550857,"entity":"Clinton"},{"reasonwords":["Walter F. Mondale","Albert Gore","Dan Quayle","John Kerry"],"patterns":["senator <b>X:NN:PERSON{3}</b> "],"score":0.4005885424971941,"entity":"Albert Gore Jr."},{"reasonwords":["Ronald Wilson Reagan","President Obama"],"patterns":[" <b>X:NN:PERSON{3}</b> be bear"],"score":0.23526583740203888,"entity":"Bush"},{"reasonwords":["Jimmy Carter","Gerald R. Ford","Taft","Hubert H. Humphrey","Mikhail Gorbachev","John Kennedy","Saddam Hussein","Al Gore","Richard M. Nixon","Spiro T. Agnew"],"patterns":["president <b>X:NN:PERSON{3}</b> "," <b>X:NN:PERSON{3}</b> take"],"score":0.2108939174354055,"entity":"Nixon"},{"reasonwords":["Jimmy Carter","Gerald R. Ford","Taft","Leonid I. Brezhnev","Hubert H. Humphrey","George W. Bush","Mikhail Gorbachev","John Kennedy","Saddam Hussein","Al Gore","Richard M. Nixon","Spiro T. Agnew"],"patterns":[" <b>X:NN:PERSON{3}</b> set","president <b>X:NN:PERSON{3}</b> "],"score":0.2095196377216503,"entity":"Carter"}]]]
var words1ID='UsingNERTargetRest';
var googlekeyword='USA president'
var patterns1=[{"governor <b>X:NN:PERSON{3}</b> ":{"Positive":["Jimmy Carter"],"Negative":[],"Unlabeled":["James","Nelson","Michael"],"Score":0.25}," <b>X:NN:PERSON{3}</b> be bear":{"Positive":["President Obama"],"Negative":[],"Unlabeled":["Clinton","Johnson","Reagan","Bush"],"Score":0.2},"president <b>X:NN:PERSON{3}</b> ":{"Positive":["Jimmy Carter"],"Negative":[],"Unlabeled":["Mikhail","Nixon","John","Carter","Richard","Clinton","Spiro","Johnson","Taft","Gerald","Kennedy","Coolidge","Hubert","Saddam","Al"],"Score":0.0625}},{},{" <b>X:NN:PERSON{3}</b> jr.":{"Positive":["Al Gore"],"Negative":[],"Unlabeled":["Gore"],"Score":0.5},"leader <b>X:NN:PERSON{3}</b> ":{"Positive":["Mikhail Gorbachev"],"Negative":[],"Unlabeled":["Gerald","Leonid"],"Score":0.3333333333333333}},{"NAME <b>X:NN:PERSON{3}</b> ":{"Positive":["Jimmy Carter","Leonid I. Brezhnev","Albert Gore","James M. Cox","Michael Dukakis","Ronald Wilson Reagan","Saddam Hussein","Al Gore","Spiro T. Agnew","Nelson Rockefeller","Gerald R. Ford","Hubert H. Humphrey","Mikhail Gorbachev","John Kennedy","President Obama","Richard M. Nixon","President Bush"],"Negative":[],"Unlabeled":["Jr."],"Score":0.9444444444444444}," <b>X:NN:PERSON{3}</b> set":{"Positive":["Leonid I. Brezhnev"],"Negative":[],"Unlabeled":["Bush","Carter"],"Score":0.3333333333333333}," <b>X:NN:PERSON{3}</b> take":{"Positive":["Gerald R. Ford"],"Negative":[],"Unlabeled":["Reagan","Nixon"],"Score":0.3333333333333333},"senator <b>X:NN:PERSON{3}</b> ":{"Positive":["Albert Gore"],"Negative":[],"Unlabeled":["Dan","Walter","John"],"Score":0.25}},{}]
var reasons2=[[[{"reasonwords":["Jimmy Carter"],"patterns":["former governor <b>X:NN{3}</b> "],"score":0.4661047401303426,"entity":"Nelson Rockefeller"},{"reasonwords":["Jimmy Carter","President Obama","President Bush"],"patterns":[" <b>X:NN{3}</b> NAME"],"score":0.5000000001661193,"entity":"President Jimmy"},{"reasonwords":["President Obama"],"patterns":["kansas , <b>X:NN{3}</b> "],"score":0.2050322585364781,"entity":"Eisenhower"},{"reasonwords":["President Bush"],"patterns":[" <b>X:NN{3}</b> pledge"],"score":0.2029852157930189,"entity":"campaign"},{"reasonwords":["Jimmy Carter","President Obama","President Bush"],"patterns":[" <b>X:NN{3}</b> NAME"],"score":0.5000000001661193,"entity":"Governor Jimmy"}],[{"reasonwords":["Jimmy Carter","Nelson Rockefeller","President Jimmy","President Obama","Governor Jimmy","President Bush"],"patterns":["NAME <b>X:NN{3}</b> "],"score":0.3279418065962303,"entity":"promise"},{"reasonwords":["Jimmy Carter","Nelson Rockefeller","President Jimmy","President Obama","Governor Jimmy","President Bush"],"patterns":["NAME <b>X:NN{3}</b> "],"score":0.3010520678208438,"entity":"pledge"},{"reasonwords":["Jimmy Carter","Nelson Rockefeller","President Jimmy","President Obama","Governor Jimmy","President Bush"],"patterns":["NAME <b>X:NN{3}</b> "],"score":0.289647158107306,"entity":"measures"},{"reasonwords":["Eisenhower"],"patterns":[" <b>X:NN{3}</b> select"],"score":0.4655911509607663,"entity":"General Eisenhower"},{"reasonwords":["Eisenhower"],"patterns":[" <b>X:NN{3}</b> obtain"],"score":0.36559115096076633,"entity":"Dwight D. Eisenhower"}],[{"reasonwords":["Governor Jimmy"],"patterns":[", former <b>X:NN{3}</b> "],"score":0.44049284070265243,"entity":"Governor Nelson Rockefeller"},{"reasonwords":["President Obama"],"patterns":[" <b>X:NN{3}</b> move to"],"score":0.3455248211502033,"entity":"family"},{"reasonwords":["Jimmy Carter","Nelson Rockefeller","President Jimmy","pledge","promise","measures","President Obama","General Eisenhower","Dwight D. Eisenhower","Governor Jimmy","President Bush"],"patterns":["NAME <b>X:NN{3}</b> "],"score":0.2497691082748828,"entity":"Administration"},{"reasonwords":["Governor Jimmy"],"patterns":["former <b>X:NN{3}</b> NAME"],"score":0.44049284070265243,"entity":"Governor Nelson"}],[{"reasonwords":["campaign"],"patterns":[" <b>X:NN{3}</b> for congress"],"score":0.5088853665568497,"entity":"agenda"},{"reasonwords":["Dwight D. Eisenhower","President Bush"],"patterns":["policy , <b>X:NN{3}</b> "," <b>X:NN{3}</b> obtain"],"score":0.2364015385492107,"entity":"Reagan"},{"reasonwords":["family","President Obama"],"patterns":[" <b>X:NN{3}</b> move"],"score":0.2285921310462034,"entity":"America"},{"reasonwords":["Dwight D. Eisenhower"],"patterns":["ii , <b>X:NN{3}</b> "],"score":0.22508993136910177,"entity":"Nixon"},{"reasonwords":["family","President Obama"],"patterns":[" <b>X:NN{3}</b> move"],"score":0.5088853665568497,"entity":"phrases"}],[{"reasonwords":["Reagan","Nixon"],"patterns":[" <b>X:NN{3}</b> take"],"score":0.34235844043490266,"entity":"Gerald R. Ford"},{"reasonwords":["Reagan"],"patterns":[" <b>X:NN{3}</b> declare"],"score":0.4661047401303426,"entity":"Warren G. Harding"},{"reasonwords":["campaign"],"patterns":[" <b>X:NN{3}</b> , johnson"],"score":0.24045047075626091,"entity":"House"},{"reasonwords":["Reagan"],"patterns":["help <b>X:NN{3}</b> "],"score":0.36197987641427964,"entity":"business"},{"reasonwords":["Nixon"],"patterns":["year , <b>X:NN{3}</b> "],"score":0.3661047401303426,"entity":"cut taxes"}]]]
var words2ID='NotUsingNERTargetRest';
var patterns2=[{" <b>X:NN{3}</b> NAME":{"Positive":["Jimmy Carter","President Obama","President Bush"],"Negative":[],"Unlabeled":["Governor","President"],"Score":0.6},"kansas , <b>X:NN{3}</b> ":{"Positive":["President Obama"],"Negative":[],"Unlabeled":["Eisenhower"],"Score":0.5},"former governor <b>X:NN{3}</b> ":{"Positive":["Jimmy Carter"],"Negative":[],"Unlabeled":["Nelson"],"Score":0.5}," <b>X:NN{3}</b> pledge":{"Positive":["President Bush"],"Negative":[],"Unlabeled":["campaign"],"Score":0.5},"policy , <b>X:NN{3}</b> ":{"Positive":["President Bush"],"Negative":[],"Unlabeled":["Reagan"],"Score":0.5}},{"NAME <b>X:NN{3}</b> ":{"Positive":["Jimmy Carter","Nelson Rockefeller","President Jimmy","President Obama","Governor Jimmy","President Bush"],"Negative":[],"Unlabeled":["Administration","pledge","promise","measures"],"Score":0.6}," <b>X:NN{3}</b> select":{"Positive":["Eisenhower"],"Negative":[],"Unlabeled":["Ford"],"Score":0.5},"d. <b>X:NN{3}</b> ":{"Positive":["Eisenhower"],"Negative":[],"Unlabeled":["Roosevelt"],"Score":0.5}," <b>X:NN{3}</b> administration":{"Positive":["Eisenhower"],"Negative":[],"Unlabeled":["Ford"],"Score":0.5}," <b>X:NN{3}</b> obtain":{"Positive":["Eisenhower"],"Negative":[],"Unlabeled":["Reagan"],"Score":0.5}},{" <b>X:NN{3}</b> win a":{"Positive":["Eisenhower"],"Negative":[],"Unlabeled":["Bush"],"Score":0.5},"ii , <b>X:NN{3}</b> ":{"Positive":["Dwight D. Eisenhower"],"Negative":[],"Unlabeled":["Nixon"],"Score":0.5}," <b>X:NN{3}</b> move to":{"Positive":["President Obama"],"Negative":[],"Unlabeled":["family"],"Score":0.5},", former <b>X:NN{3}</b> ":{"Positive":["Governor Jimmy"],"Negative":[],"Unlabeled":["Governor"],"Score":0.5},"former <b>X:NN{3}</b> NAME":{"Positive":["Governor Jimmy"],"Negative":[],"Unlabeled":["Governor"],"Score":0.5}},{" <b>X:NN{3}</b> , johnson":{"Positive":["campaign"],"Negative":[],"Unlabeled":["House"],"Score":0.5}," <b>X:NN{3}</b> for congress":{"Positive":["campaign"],"Negative":[],"Unlabeled":["agenda"],"Score":0.5}," <b>X:NN{3}</b> of PLACE .":{"Positive":["Jimmy Carter"],"Negative":[],"Unlabeled":["Governor"],"Score":0.5}," <b>X:NN{3}</b> move":{"Positive":["family","President Obama"],"Negative":[],"Unlabeled":["America","phrases"],"Score":0.5}," <b>X:NN{3}</b> be bear in":{"Positive":["President Obama"],"Negative":[],"Unlabeled":["Bush"],"Score":0.5}},{" <b>X:NN{3}</b> take":{"Positive":["Reagan","Nixon"],"Negative":[],"Unlabeled":["Ford"],"Score":0.6666666666666666},"help <b>X:NN{3}</b> ":{"Positive":["Reagan"],"Negative":[],"Unlabeled":["business"],"Score":0.5}," <b>X:NN{3}</b> announce":{"Positive":["Nixon"],"Negative":[],"Unlabeled":["Carter"],"Score":0.5},"year , <b>X:NN{3}</b> ":{"Positive":["Nixon"],"Negative":[],"Unlabeled":["cut"],"Score":0.5}," <b>X:NN{3}</b> declare":{"Positive":["Reagan"],"Negative":[],"Unlabeled":["Harding"],"Score":0.5}}]
var numSystems = 2
var labeledWords  =['Nelson Rockefeller','Herbert Walker Bush','contributed#','Ronald Reagan','Bush','John Fitzgerald Kennedy','Nixon','Carter','George Herber Walker Bush','William Clinton','William','Nelle','George Bush','James Earl','John','Dwight D. Eisenhower','Prescott Bush','Wilkes Booth#','Taft','Prescott#','Coolidge','Kennedy','W. Bush','George','Reagan','Adams','Eisenhower','Ronald Wilson Reagan','William Jefferson','Roger#','Blythe III','Clinton','Johnson','Richard M.','George W.','George C. Marshall','Gibbs McAdoo#','Lyndon B.','III','John Quincy','agenda#','Governor Nelson Rockefeller','President Jimmy','Warren G. Harding','promise#','General Eisenhower','business#','Gerald R. Ford','America#','family#','Administration#','pledge#','phrases#','House#','measures#','campaign#','Roosevelt','Governor Jimmy','cut taxes#','Governor Nelson','Albert Gore Jr.','Gore Jr.','Leonid I. Brezhnev#','Albert Gore','Bush','James M. Cox','Nixon','George W. Bush','Michael Dukakisi#','Ronald Wilson Reagan','Saddam Hussein#','Dan Quayle','Al Gore','Carter','John Kerry','Spiro T. Agnew','Clinton','Walter F. Mondale','Nelson Rockefeller','Gerald R. Ford','Taft','Hubert H. Humphrey','Mikhail Gorbachev#','John Kennedy','Richard M. Nixon']
