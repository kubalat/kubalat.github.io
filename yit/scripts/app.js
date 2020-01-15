document.addEventListener("DOMContentLoaded", function() {
    new Vue({
        el: "#app",
        data: {
        documentation: null,
          app_title: "Formulár",
          dynamic_data: []
        },

        computed: {
          level() {
            let returnValue = "";
            switch(this.documentation.base_info.tag) {
              case "dsp":
                returnValue = "Dokumentácia pre stavebné povolenie";
                break;
              case "drs":
                returnValue = "Dokumentácia pre realizáciu stavby";
                break;
              default:
                break;
            }
            return returnValue;
          },
        },

        created() {
            let documentation = {
                base_info: {
                    project_name: "",
                    project_number: "",
                    project_bussiness_name: "",
                    segment: "",
                    builder: "YIT Slovakia a.s., Račianska 153/A, 831 54 Bratislava",
                    investor: "YIT Slovakia a.s., Račianska 153/A, 831 54 Bratislava",
                    subject: "Zadávacie podmienky pre projektanta",
                    approved_by: "",
                    processed_by: "",
                    approved_date: new Date().toLocaleDateString(),
                    category_standard: "standard",
                    tag: "dsp",
                },
                company_info: {
                    address: "YIT Slovakia a.s., Račianska 153/A, 831 54 Bratislava",
                    post: "YIT Slovakia a.s., P.O.BOX 21, 830 04 Bratislava",
                    contacts: {
                        project_manager: {
                            name: "",
                            number: "",
                            email: ""
                        },
                        design_manager: {
                            name: "",
                            number: "",
                            email: ""
                        },
                        production_manager: {
                            name: "",
                            number: "",
                            email: ""
                        },
                        specialist_tzb: {
                            name: "",
                            number: "",
                            email: ""
                        },
                        specialist_ei: {
                            name: "",
                            number: "",
                            email: ""
                        }
                    }
                },
                supplier_info: {
                    address: "",
                    post: "",
                    contacts: {
                        architect: {
                            name: "",
                            number: "",
                            email: ""
                        }
                    }
                },
                building_identification: {
                    operative_state: "Bratislavský",
                    district: "",
                    city: "",
                    street: "",
                    catastral_area: "",
                    area: ""
                },
                draft_project_attributes: {
                    hpp: {
                        name: "",
                        value: 0
                    },
                    zp: {
                        name: "",
                        value: 0
                    },
                    floor_area: {
                        name: "",
                        value: 0
                    }
                },

                expedition_pd: {
                    main_so: {
                        form: "- 3 x tlač. forma\n- 1 x dig. forma",
                        date: new Date().toLocaleDateString(),
                        extensions: "edit.: .rvt, .dwg, .doc, .xls\nneedit.: .pdf"
                    },
                    secondary_so: {
                        form: "- 3 x tlač. forma\n- 1 x dig. forma",
                        date: new Date().toLocaleDateString(),
                        extensions: "edit.: .rvt, .dwg, .doc, .xls\nneedit.: .pdf"
                    },
                    report_sizes: {
                        form: "- 3 x tlač. forma\n- 1 x dig. forma",
                        date: new Date().toLocaleDateString(),
                        extensions: "edit.: .CENKROS, .doc, .xls\nneedit.: .pdf"
                    },
                    terms: "- 1x/týždeň konzultácie\n- digitálna predexpedícia\n- expedícia v zmysle ZoD"
                  },
                  documentations: [
                      { can_modify: false, value: "Polohopisné a výškopisné zameranie" },
                      { can_modify: false, value: "Dokumentácia pre rozhodnutie o umiestnení stavby (DÚR)" },
                      { can_modify: false, value: "Rozhodnutie o umiestnení stavby č. XXX" },
                      { can_modify: false, value: "Dokladová časť ÚR" },
                      { can_modify: false, value: "Dokumentácia pre stavebné povolenie (DSP)" },
                      { can_modify: false, value: "Vyjadrenia, stanoviská a dokladová časť DSP" },
                      { can_modify: false, value: "Stavebné povolenie č. XXX" },
                      { can_modify: false, value: "BIM manuál a BEP (formulár BEP musí byť vyplnený pred začiatkom prác na ďalšom stupni)"},
                      { can_modify: false, value: "Štandard bytov" },
                      { can_modify: false, value: "Príloha technických riešení a štandardných detailov YIT" },
                      { can_modify: false, value: "Tabuľka interného výkazu plôch „YIT_DATA“" },
                      { can_modify: true, value: null },
                  ],
                  rules_of_project: [
                      { can_modify: false, value: "Rešpektovať maximálne objemové limity, stavebný pozemok, uličnú čiaru a ochranné pásma v lokalite."},
                      { type_change: true, can_modify: false, value: "Charakter návrhu bude spĺňať požiadavky na bývanie v štandarde Štandard z hľadiska vybavenia, technológií i architektúry." },
                      { can_modify: false, value: "Investor požaduje plnenie limitov, ktoré boli potvrdené v predošlom stupni. V prípade, že príde k výraznej úprave súvisiacich parametrov je Dodávateľ povinný Zadávateľa informovať o tejto zmene a túto zmenu si s ním odsúhlasiť, napr. úprava predajných plôch a pod."},
                      { can_modify: false, value: "Členenie objektovej skladby a názvov dodržať podľa predošlého stupňa PD, resp. vydaných povolení."},
                      { can_modify: true, value: null }
                  ],
                  form_of_processing: [
                      { can_modify: false, value: "Dokumentácia bude spracovaná v súlade s príslušnými právnymi predpismi a normami platnými na území SR ako aj s týmito zadávacími podmienkami a v rozsahu aktuálneho cenníka projektových prác UNIKA." },
                      { can_modify: false, value: "Dokumentácia bude taktiež spracovaná v zmysle prípadných požiadaviek dodatočne vyplývajúcich zo zápisov vyhotovených na pravidelných dizajnových mítingoch." },
                      { can_modify: false, value: "Dokumentácia bude spracovaná podľa § 9 vyhlášky č. 453/2000 Z.z., ktorou sa vykonávajú niektoré ustanovenia stavebného zákona, vyhlášky č. 532/2002 Z.z., ktorou sa ustanovujú podrobnosti o všeobecných technických požiadavkách na výstavbu a o všeobecných technických požiadavkách na stavby užívané osobami s obmedzenou schopnosťou pohybu a orientácie a bude zohľadňovať záujmy chránené osobitnými predpismi, v súlade s §126 zákona č. 50/1976 Zb. o územnom plánovaní a stavebnom poriadku (stavebný zákon), v znení neskorších predpisov." },
                      { can_modify: false, value: "V prípade potreby, dokumentácia bude upravená/dopracovaná v zmysle požiadaviek dotknutých orgánov, uplatnených v príslušnom konaní podľa zákona č. 50/1976 Zb. o územnom plánovaní a stavebnom poriadku (stavebný zákon), v platnom znení." },
                      { can_modify: false, value: "Hlavný komunikačný nástroj koordinácie PD bude formou spoločne zdieľaného dátového prostredia (DALUX), ktorého prevádzku zabezpečí investor (viď. BEP)." },
                      { can_modify: false, value: "Pred začiatkom prác je požadované spracovať zoznam projektantov všetkých profesií a ich kontakty." },
                      { can_modify: false, value: "Súhrnná bilancia plôch bude uvedená v tabuľkách plôch požadovaných ukazovateľov ako ZP, IPP, HPP, úžitkovej plochy, predajnej plochy, spevnených plôch, statickej dopravy, zelene (na teréne/na substráte). Všetky výpočty sa vyžadujú v uveriteľnej forme (v rámci výkresovej časti)." },
                      { can_modify: false, value: "V tabuľkách uvádzať sumárne výmery jednotlivých bytov bez balkónov/terás (plocha balkónov/terás/predzáhradiek bude v legende bytu pod riadkom so sumárnou podlahovou plochou bytu)." },
                      { can_modify: false, value: "Pre účely ďalšieho posudzovania je potrebné, aby projektant vykazoval aj plošné údaje jednotiek a údaje o konštrukciách podľa požadovanej metodiky danej zadávateľom (príloha) v členení podľa jednotlivých objektov a podlaží." },
                      { can_modify: false, value: "V tabuľke „YIT_DATA.xlsx“ ako aj v projektovej dokumentácii je potrebné označiť a určiť plochu aj garážových stojísk, inštalačných šácht, kobiek a prípadne iných jalových priestorov vo vnútri stavby." },
                      { can_modify: false, value: "Podrobnosť spracovania:\n- situácie - M 1:250\n- pôdorysy nadzemných podlaží, pohľady a rezy - M 1:50\n- pôdorysy podzemných podlaží - M 1:75\nVšetky výkresy v rámci PD budú aj v tlačenej forme s jasne rozlíšiteľnou a čitateľnou farebnou kresbou a textom. " },
                      { can_modify: false, value: "V koordinačných situáciách budú farebne rozlíšené iba riešené časti (inžinierske siete a pod.), všetky ostatné čiernobielo." },
                      { can_modify: false, value: "Poloha rezovej čiary, pohľadov prehľadne označená v pôdorysnej schéme na výkrese. Označenie detailov či poznámok bude označené jasne a prehľadne." },
                      { can_modify: false, value: "Všetky opakujúce sa podlažia (typické podlažie) budú vytlačené ako samostatný výkres, platí pre všetky profesie vrátane statiky." },
                      { can_modify: false, value: "Súčasťou PD budú spoločné koordinačné výkresy rozvodov profesií (zti, uk, el, sla, vzt,...) pre každé podlažie." },
                      { can_modify: false, value: "Všetky zhotoviteľom navrhované systémy a materiály budú v projektovej dokumentácii definované ako referenčné (t.j. konkrétne systémy a materiály výrobcov určujúce technické riešenie alebo vlastnosti, ktoré je možné zameniť za rovnakú kvalitu dodávateľom stavby od iného výrobcu)." },
                      { can_modify: false, value: "Dispozície budú v digitálnej forme aj so zariadením v samostatnej hladine, ktoré preukáže ich zariaditeľnosť a prevádzkovú spôsobilosť." },
                      { can_modify: false, value: "Výkazy a rozpočty spracovať v kompatibilite s Rosoft (vzorová štruktúra na vyžiadanie)." },
                      { can_modify: false, value: "V PD - sprievodná technická správa uviesť všetky fakturačné a podružné merania a priestory, ktoré sú merané samostatne a to každej profesie (ÚK, ZTI, ELI...)." },
                      { can_modify: false, value: "Súčasťou každej expedície, dodatočnej expedície či expedície revízií bude odovzdanie aktualizovanej tabuľky evidencie podľa prílohy." },
                      { can_modify: false, value: "Za revíziu projektovej dokumentácie sa považuje úprava PD vyžadujúca si úplnú náhradu pôvodného dokumentu, či výkresu za nový. Revízia alebo zmena výkresovej časti bude zaznamenaná vo výkrese v rámci tabuľky úprav, ktorá obsahuje nasledujúce údaje:\n- Číslo revízie a v prípade, ak sa k revízii viaže aj zmena, tak bude obsahovať aj číslo revízie aj číslo zmeny napr. R01, alebo R01_Z1\n- Dátum revízie alebo zmeny - DD.MM.RRRR\n- Krátky popis revízie alebo zmeny (v prípade, že sú úpravy súvisiace s revíziou veľkého rozsahu, vypracuje Dodávateľ k takejto revízii Sprievodný list revízie s podrobnejším popisom úprav)\n- Revízia výkresovej časti bude zaznamenaná vo výkrese revíznym obláčikom (farebne), či iným zrozumiteľným spôsobom, tak aby bola zachovaná čitateľnosť výkresu. " },
                      { can_modify: false, value: "Metodika označovania priestorov v projektovej dokumentácii tvorí prílohu zadania." },
                      { can_modify: false, value: "Označovanie súborov digitálnej časti DRS rieši BEP." },
                      { can_modify: false, value: "Dokumentácia bude dodaná v tlačenej forme (v zmysle ZoD) s označením jednotlivých vyhotovení (paré) číslicami 0-X a v digitálnej forme v editovateľnom formáte (súbory s koncovkami *.dwg, *.rvt (prípadne iný zdrojový súbor), *.docx, *.xlsx a iné) ako aj needitovateľnom formáte (súbory s koncovkami *.pdf, *.jpg a iné). Pričom editovateľný formát musí obsahovať aj zdrojové údaje z externých referencií, súbory .ctb a pod. V prípade exportov do .dwg dodržať prehľadné spracovanie v hladinách." },
                      { can_modify: false, value: "Do výkresov umiestniť schému celého bloku s označením polohy, o ktorú časť bloku sa jedná (ak je to nutné z hľadiska čitateľnosti)." },
                      { can_modify: false, value: "V rámci expedície projektovej dokumentácie bude dodaný zoznam všetkých výkresov v štruktúre PD (.xls)." },
                      { can_modify: false, value: "Súčasťou projektovej dokumentácie DRS bude samostatný dokument obsahujúci zoznam a popis koncepčných zmien DRS oproti DSP (pre interné účely Investora)." },
                      { can_modify: false, value: "V technickej správe bude teplotechnické posúdenie hlavných konštrukcií + preverenie problematických konštrukcií, kde je možnosť vzniku tepelných mostov." },
                      { can_modify: false, value: "Všetky navrhované konštrukcie budú mať doložené technické listy a akustický výpočet podľa platných noriem: skladby byt/byt (vedľa seba, nad sebou, pod sebou), byt/chodba (hlavne v časti vstupných dverí), byt/schodisko, byt /inštalačná šachta..." },
                      { can_modify: false, value: "Súčasťou dokumentácie bude spracovaný aj návrh potrebných prvkov BOZP zabudovávaných do konštrukcií podľa ich detailov (príloha)." },
                      { can_modify: true, value: null }
                  ],
                  architectural_and_operating_solution: [
                      { can_modify: true, value: null }
                  ],
                  building_constructions: [
                    { can_modify: true, value: null }
                  ],
                  heating: [
                    { can_modify: true, value: null }
                  ],
                  sanitary: [
                    { can_modify: true, value: null }
                  ],
                  ventilation: [
                    { can_modify: true, value: null }
                  ],
                  high_electricity_installations: [
                    { can_modify: true, value: null }
                  ],
                  low_electricity_installations: [
                    { can_modify: true, value: null }
                  ],
                  measurement_and_regulations: [
                    { can_modify: true, value: null }
                  ],
                  paved_areas_roads_and_traffic_signs: [
                    { can_modify: true, value: null }
                  ],
                  field_modifications_and_little_architecture: [
                    { can_modify: true, value: null }
                  ],
                  secondary_objects: [
                    { can_modify: true, value: null }
                  ],
                  operating_files: [
                    { can_modify: true, value: null }
                  ],
                  other_requirements: [
                    { can_modify: true, value: null }
                  ]
            }
            this.documentation = documentation
        },

        mounted() {
            let elements = document.querySelectorAll(".points .row textarea")
            elements.forEach((el) => {
                el.style.cssText = 'height:' + el.scrollHeight + 'px';
            })
        },

        methods: {
            addDocumentationPoint(sectionName) {
                this.documentation[sectionName].push({ can_modify: true, value: null })
            },

            removeDocumentationPoint(sectionName, point) {
                if (point.can_modify === true) {
                    this.documentation[sectionName] = this.documentation[sectionName].filter(f => f != point)
                }
            },

            pointTextAreaResize(event) {
                // TODO backspace
                // TODO scroll height not working properly
                let element = event.target
                console.log(element.scrollHeight)
                element.style.cssText = 'height:' + element.scrollHeight + 'px';
            },

            changeTypeInRule() {
                let type = ""
                switch(this.documentation.base_info.category_standard) {
                    case "standard":
                        type = "Štandard"
                      break
                    case "bussiness":
                        type = "Bussiness"
                      break
                    case "comfort":
                        type = "Comfort"
                        break
                    default:
                      break;
                  }
                this.documentation.rules_of_project.filter(f => f.type_change === true)[0].value= "Charakter návrhu bude spĺňať požiadavky na bývanie v štandarde " + type + " z hľadiska vybavenia, technológií i architektúry."
            }
        }
      })
})

