class Dictionary {

    /**
     * This structure contains translations for page independent general elements
     * @type {{element_id: {English: string, Russian: string}}}
     */
    generalItems = {
        "required_star": {
            "Russian": "Обязательное поле",
            "English": "This field is required"
        },
        "submit": {
            "Russian": "ОТПРАВИТЬ",
            "English": "SUBMIT"
        },
        "previous": {
            "Russian": "НАЗАД",
            "English": "PREVIOUS"
        },
        "next": {
            "Russian": "ДАЛЕЕ",
            "English": "NEXT"
        },
        "choose_one": {
            "Russian": "Выберите один из вариантов",
            "English": "Choose one of the options"
        },
        "name": {
            "Russian": "Имя",
            "English": "Name"
        },
        "surname": {
            "Russian": "Фамилия",
            "English": "Surname"
        }
    };
    /**
     *This structure contains a page-related list of elements's translations
     * @type {{"page_number": {element_id: {English: string, Russian: string}}}}
     */
    items = {
        2: {

            "client": {
                "Russian": "Клиент",
                "English": "Client"
            },

            "contractor": {
                "Russian": "Подрядчик Linxdatacenter",
                "English": "Contractor"
            }

        },
        3: {
            "ot_access": {
                "Russian": "Разовый доступ",
                "English": "One-time access"
            },
            "const_access": {
                "Russian": "Постоянный доступ (Регистрация при первом посещении)",
                "English": "Constant accesss"
            },
            "induction_training": {
                "Russian": "Вводный инструктаж",
                "English": "Induction training"
            },
            "qa_assess": {
                "Russian": "Оцените качество обслуживания",
                "English": "Assess the quality of work"
            },
        },
        9: {
            "ot_access": {
                "Russian": "Разовый доступ",
                "English": "One-time access"
            },
            "const_access": {
                "Russian": "Постоянный доступ (Регистрация при первом посещении)",
                "English": "Constant accesss"
            }
        },
        4: {
            "introduce": {
                "Russian": "Представьтесь, пожалуйста",
                "English": "Introduce yourself"

            }
        },
        5: {
            "company": {
                "Russian": "Введите название компании",
                "English": "Enter company name"
            }
        },
        6: {
            "accompany": {
                "Russian": "Кто Вас сопровождает?",
                "English": "Who accompanies you?"
            }
        },
        7: {
            "rules_header": {
                "Russian": "Правила посещения ЦОД Linxdatacenter",
                "English": "Rules for visiting Linxdatacenter"
            },
            "rules_description": {
                "Russian": "Полностью ознакомьтесь с текстом для дальнейшего заполнения формы",
                "English": "You have to read and agree with the rules"
            },
            "checkbox_description": {
                "Russian": `Я соглашаюсь с правилами, изложенными выше.`,
                "English": "I agree with the rules set out above"
            }
        },
        8: {
            "finalMsg": {
                "Russian": "Нажмите кнопку \"Отправить\" и подойдите к сотруднику службы безопасности для завершения оформления доступа.",
                "English": "Press button \"Submit\" and approach the security officer to complete the access."
            },
            "thank": {
                "Russian": "Спасибо!",
                "English": "Thank you!"
            }
        },
        10: {
            "email": {
                "Russian": "Введите ваш адрес электронной почты",
                "English": "Enter your email address"
            },
            "explain": {
                "Russian": "Вам будет отправлена полная версия Руководство клиента.",
                "English": "You will be sent a full version of the Customer Guide and editable versions of order forms"
            }
        },
        11: {
            "quality": {
                "Russian": "Оцените качество обслуживания",
                "English": "Assess the quality of service"
            }
        },
        12: {
            "comment": {
                "Russian": "Поделитесь, пожалуйста, вашими комментариями",
                "English": "Share, please, with your comments"
            }
        },
        13: {
            "take": {
                "Russian": "Сделайте фото",
                "English": "Take a photo"
            },
            "takenExplain": {
                "Russian": "Если вас не устраивает фото , нажмите на кнопку \"Переделать фото\"",
                "English": "If you are not satisfied with the photo, click on the \"Retake photo\" button"
            },
            "explain": {
                "Russian": "",
                "English": ""
            },
            "takeButton": {
                "Russian": "СДЕЛАТЬ ФОТО",
                "English": "TAKE PHOTO"
            },
            "retakeButton": {
                "Russian": "ПЕРЕДЕЛАТЬ ФОТО",
                "English": "RETAKE PHOTO"
            }
        }

    };
    /**
     *
     * @type {{English: string, Russian: string}}
     */
        //TODO: Choose another method for storing the rules
    rules = {
        //Russian part
        "Russian": `Следует:\n` +
            `        - использовать машину для чистки обуви и\\или использовать бахиллы, доступные на входе;\n` +
            `        - снимать верхнюю одежду;\n` +
            `        - соблюдать общепринятые нормы поведения;\n` +
            `        - бережно относиться к имуществу Linxdatacenter и других клиентов;\n` +
            `        - носить на видном месте пропуск с идентификационной лентой;\n` +
            `        - осторожно перемещаться по территории, обращая внимание на конусы и ограждения;\n` +
            `        - плотно закрывать за собой двери помещений и холодных коридоров;\n` +
            `        - заранее изучить планы эвакуации и инструкцию к ним, по сигналу \`ПОЖАР\` (звуковому и световому) немедленно покинуть помещения по путям эвакуации и собраться в пункте сбора в районе автобусного кольца;\n` +
            `        - в случае других внештатных ситуаций беспрекословно выполнять указания сопровождающего, сотрудника охраны ЦОД, либо других сотрудников Linxdatacenter;\n` +
            `        - немедленно информировать сотрудников Linxdatacenter о замеченных неисправностях, возгораниях, задымлениях или других подозрительных событиях.\n` +
            `\n` +
            `        Запрещено:\n` +
            `        - курить;\n` +
            `        - самостоятельно пользоваться грузовым лифтом;\n` +
            `        - воздейcтвовать на рукоятки и кнопки технологического оборудования;\n` +
            `        - проникать под фальшпол и в помещения\\зоны\\стойки, в которые у Вас нет доступа;\n` +
            `        - оставлять в помещениях\\стойках\\зонах посторонние предметы, мусор, бумагу, полиэтилен и т.п;\n` +
            `        - передавать свою карту доступа другому сотруднику;\n` +
            `        - пропускать по своей карте доступа кого бы то ни было, за исключением сопровождаемых Вами по согласованной заявке на временный доступ;\n` +
            `        - любая видео, аудио и фотосъёмка.\n` +
            `\n` +
            `        Настоящим подтверждаю, что я извещён о том, что, посещая Linxdatacenter, я могу получить информацию конфиденциального характера или информацию, являющуюся чьей-либо собственностью.\n` +
            `        Я обязуюсь:\n` +
            `        - относиться к данной информации как к конфиденциальной;\n` +
            `        - не разглашать данную информацию любой третьей стороне без предварительного согласия уполномоченного сотрудника Linxdatacenter;\n` +
            `        - использовать данную информацию исключительно в рамках моих деловых отношений с Linxdatacenter.`,

        //English part
        "English": "One should:\n" +
            " \n" +
            "∙             Adhere to conventional behavior norms\n" +
            "∙             Comply with fire, sanitary, ecological, traffic and other safety regulations \n" +
            "∙             Enter/exit the premises and territory using only specifically indicated zones, entrances/exits\n" +
            "∙             Remove daily, industrial waste from the warehouse territory without delay\n" +
            "∙             Park vehicles only in places specifically allocated for Svyaz VSD\n" +
            "∙             Treat property of Svyaz VSD and other customers with care\n" +
            "∙             Immediately inform any employee of Svyaz VSD of discovered malfunctions (leakage of water/liquids, sparking, smell of burning or gas etc), about any damages, breakdowns of construction elements and engineering equipment of the buildings\n" +
            "∙             Inform any employee of Svyaz VSD of all violations of fire, sanitary, ecological, traffic and other safety regulations\n" +
            "∙             Immediately inform any employee of Svyaz VSD of all noticed suspicious persons, bags, packages and other items left in the DC territory and the adjacent territory \n" +
            "∙             Instruct all representatives of your company on behavior rules and work procedures in the DC territory\n" +
            "∙             In case of emergency follow instructions of DC security officers or other employees of Svyaz VSD implicitly\n" +
            " \n" +
            "It is forbidden to:\n" +
            " \n" +
            "∙             Hand over one's electronic pass to third parties or leave it unattended\n" +
            "∙             Carry out works with third party's equipment or works not mentioned in the permit application; enter DC premises which contain no equipment or property of Customer\n" +
            "∙             Smoke in any DC premises\n" +
            "∙             Litter\n" +
            "∙             Take pictures or film without permission of DC managers\n" +
            "∙             Bring beverages and food into the DC modules\n" +
            "∙             Bring into the territory of the complex explosives, combustible and highly inflammable liquids and materials, weapons, ammunition, toxic agents\n" +
            "∙             Use freight lift unsupervised, in the absence of an authorized representative of Svyaz VSD\n" +
            "∙             Switch off automatic circuit breakers located outside the leased rack unsupervised\n" +
            "∙             Carry out any actions not approved by Svyaz VSD which can interrupt provision of Svyaz VSD's services, damage property of Svyaz VSD or third parties in the DC territory."
    };
}

export default Dictionary