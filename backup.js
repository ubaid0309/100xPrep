const data = [
  {
    data: {
      id: "diploma",
      name: "DIPLOMA",
      branches: {
        create: [
          {
            id: "comp-eng",
            name: "Computer Engineering",
            semesters: {
              create: [
                {
                  id: "sem-1",
                  number: 1,
                  subjects: {
                    create: [
                      {
                        id: "sub-eng",
                        name: "English",
                        isNotesAvailable: false,
                        notes: {
                          create: [
                            {
                              id: "notes-applied-001",
                              chapterName: "Applied Grammar",
                              chapterNumber: 1,
                              notionDocId: "doc-applied-grammar",
                              youtubePlaylistLink:
                                "https://youtube.com/playlist?list=PL123456789",
                              isNotesComplete: false,
                            },
                            {
                              id: "notes-comprehenstion-001",
                              chapterName: "Comprehenstion",
                              chapterNumber: 2,
                              notionDocId: "doc-comprehenstion",
                              youtubePlaylistLink:
                                "https://youtube.com/playlist?list=PL123456789",
                              isNotesComplete: false,
                            },
                            {
                              id: "notes-paragraph-003",
                              chapterName: "Paragraph and Dialog Writing",
                              chapterNumber: 3,
                              notionDocId: "doc-paragraph-dialog-writing",
                              youtubePlaylistLink:
                                "https://youtube.com/playlist?list=PL123456780",
                              isNotesComplete: false,
                            },
                            {
                              id: "notes-vocab-004",
                              chapterName: "Vocabulary Building",
                              chapterNumber: 4,
                              notionDocId: "doc-vocabulary-building",
                              youtubePlaylistLink:
                                "https://youtube.com/playlist?list=PL123456781",
                              isNotesComplete: false,
                            },
                            {
                              id: "notes-speeches-005",
                              chapterName: "Speeches",
                              chapterNumber: 5,
                              notionDocId: "doc-speeches",
                              youtubePlaylistLink:
                                "https://youtube.com/playlist?list=PL123456782",
                              isNotesComplete: false,
                            },
                          ],
                        },
                        content: {
                          create: [
                            {
                              id: "content-model-answer-001",
                              name: "Model Answer for English Assignment",
                              redirectLink: "https://example.com/model-answer",
                              description:
                                "A comprehensive model answer for the English assignment.",
                            },
                            {
                              id: "content-question-paper-001",
                              name: "Previous Year Question Paper",
                              redirectLink:
                                "https://example.com/question-paper",
                              description:
                                "Question paper from last year's exam for English.",
                            },
                          ],
                        },
                      },
                      {
                        id: "sub-basic-sci",
                        name: "Basic Science",
                        isNotesAvailable: false,
                        notes: [
                          {
                            id: "notes-units-001",
                            chapterName: "Units and Measurements",
                            chapterNumber: 1,
                            notionDocId: "doc-units-measurements",
                            youtubePlaylistLink:
                              "https://youtube.com/playlist?list=PL123456789",
                            isNotesComplete: false,
                          },
                          {
                            id: "notes-electricity-002",
                            chapterName:
                              "Electricity, Magnetism and Semiconductors",
                            chapterNumber: 2,
                            notionDocId: "doc-electricity-magnetism",
                            youtubePlaylistLink:
                              "https://youtube.com/playlist?list=PL123456780",
                            isNotesComplete: false,
                          },
                          {
                            id: "notes-heat-optics-003",
                            chapterName: "Heat and Optics",
                            chapterNumber: 3,
                            notionDocId: "doc-heat-optics",
                            youtubePlaylistLink:
                              "https://youtube.com/playlist?list=PL123456781",
                            isNotesComplete: false,
                          },
                          {
                            id: "notes-chem-bond-004",
                            chapterName: "Chemical Bonding and Catalysis",
                            chapterNumber: 4,
                            notionDocId: "doc-chemical-bonding",
                            youtubePlaylistLink:
                              "https://youtube.com/playlist?list=PL123456782",
                            isNotesComplete: false,
                          },
                          {
                            id: "notes-corrosion-005",
                            chapterName:
                              "Metal Corrosion, its Prevention and Electrochemistry",
                            chapterNumber: 5,
                            notionDocId: "doc-metal-corrosion",
                            youtubePlaylistLink:
                              "https://youtube.com/playlist?list=PL123456783",
                            isNotesComplete: false,
                          },
                          {
                            id: "notes-paints-006",
                            chapterName:
                              "Paints, Varnishes, Insulators, Polymers, Adhesives, and Lubricants",
                            chapterNumber: 6,
                            notionDocId: "doc-paints-varnishes",
                            youtubePlaylistLink:
                              "https://youtube.com/playlist?list=PL123456784",
                            isNotesComplete: false,
                          },
                        ],
                        content: [
                          {
                            id: "content-model-answer-001",
                            name: "Model Answer for Basic Science Assignment",
                            redirectLink: "https://example.com/model-answer",
                            description:
                              "A comprehensive model answer for the Basic Science assignment.",
                          },
                          {
                            id: "content-question-paper-001",
                            name: "Previous Year Question Paper",
                            redirectLink: "https://example.com/question-paper",
                            description:
                              "Question paper from last year's exam for Basic Science.",
                          },
                        ],
                      },
                      {
                        id: "sub-basic-math",
                        name: "Basic Mathematics",
                        isNotesAvailable: false,
                        notes: [
                          {
                            id: "notes-algebra-001",
                            chapterName: "Algebra",
                            chapterNumber: 1,
                            notionDocId: "doc-algebra",
                            youtubePlaylistLink:
                              "https://youtube.com/playlist?list=PL123456785",
                            isNotesComplete: false,
                          },
                          {
                            id: "notes-trigonometry-002",
                            chapterName: "Trigonometry",
                            chapterNumber: 2,
                            notionDocId: "doc-trigonometry",
                            youtubePlaylistLink:
                              "https://youtube.com/playlist?list=PL123456786",
                            isNotesComplete: false,
                          },
                          {
                            id: "notes-geometry-003",
                            chapterName: "Coordinate Geometry",
                            chapterNumber: 3,
                            notionDocId: "doc-coordinate-geometry",
                            youtubePlaylistLink:
                              "https://youtube.com/playlist?list=PL123456787",
                            isNotesComplete: false,
                          },
                          {
                            id: "notes-mensuration-004",
                            chapterName: "Mensuration",
                            chapterNumber: 4,
                            notionDocId: "doc-mensuration",
                            youtubePlaylistLink:
                              "https://youtube.com/playlist?list=PL123456788",
                            isNotesComplete: false,
                          },
                          {
                            id: "notes-statistics-005",
                            chapterName: "Statistics",
                            chapterNumber: 5,
                            notionDocId: "doc-statistics",
                            youtubePlaylistLink:
                              "https://youtube.com/playlist?list=PL123456789",
                            isNotesComplete: false,
                          },
                        ],
                        content: [
                          {
                            id: "content-model-answer-001",
                            name: "Model Answer for Basic Mathematics Assignment",
                            redirectLink: "https://example.com/model-answer",
                            description:
                              "A comprehensive model answer for the Basic Mathematics assignment.",
                          },
                          {
                            id: "content-question-paper-001",
                            name: "Previous Year Question Paper",
                            redirectLink: "https://example.com/question-paper",
                            description:
                              "Question paper from last year's exam for Basic Mathematics.",
                          },
                        ],
                      },
                    ],
                  },
                },
                {
                  id: "sem-2",
                  number: 2,
                  subjects: [
                    {
                      id: "sub-elements-electrical-engineering",
                      name: "Elements of Electrical Engineering",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-magnetic-circuits-001",
                          chapterName: "Magnetic Circuits",
                          chapterNumber: 1,
                          notionDocId: "doc-magnetic-circuits",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL223456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-ac-fundamentals-002",
                          chapterName: "AC Fundamentals",
                          chapterNumber: 2,
                          notionDocId: "doc-ac-fundamentals",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL223456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-polyphase-ac-003",
                          chapterName: "Polyphase AC Circuits",
                          chapterNumber: 3,
                          notionDocId: "doc-polyphase-ac-circuits",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL223456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-transformer-dc-motors-004",
                          chapterName: "Transformer and DC Motors",
                          chapterNumber: 4,
                          notionDocId: "doc-transformer-dc-motors",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL223456784",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-fractional-hp-motors-005",
                          chapterName: "Fractional Horse Power (FHP) Motors",
                          chapterNumber: 5,
                          notionDocId: "doc-fhp-motors",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL223456785",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-protective-devices-006",
                          chapterName: "Protective Devices and Switchgear",
                          chapterNumber: 6,
                          notionDocId: "doc-protective-devices-switchgear",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL223456786",
                          isNotesComplete: false,
                        },
                      ],
                      content: [
                        {
                          id: "content-model-answer-001",
                          name: "Model Answer for Electrical Engineering Assignment",
                          redirectLink: "https://example.com/model-answer",
                          description:
                            "A comprehensive model answer for the Electrical Engineering assignment.",
                        },
                        {
                          id: "content-question-paper-001",
                          name: "Previous Year Question Paper",
                          redirectLink: "https://example.com/question-paper",
                          description:
                            "Question paper from last year's exam for Electrical Engineering.",
                        },
                      ],
                    },
                    {
                      id: "sub-applied-mathematics",
                      name: "Applied Mathematics",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-differential-calculus-001",
                          chapterName: "Differential Calculus",
                          chapterNumber: 1,
                          notionDocId: "doc-differential-calculus",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL323456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-integral-calculus-002",
                          chapterName: "Integral Calculus",
                          chapterNumber: 2,
                          notionDocId: "doc-integral-calculus",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL323456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-definite-integration-003",
                          chapterName: "Application of Definite Integration",
                          chapterNumber: 3,
                          notionDocId: "doc-definite-integration",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL323456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-first-order-differential-004",
                          chapterName:
                            "First Order First Degree Differential Equations",
                          chapterNumber: 4,
                          notionDocId: "doc-first-order-differential-equations",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL323456784",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-numerical-methods-005",
                          chapterName: "Numerical Methods",
                          chapterNumber: 5,
                          notionDocId: "doc-numerical-methods",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL323456785",
                          isNotesComplete: false,
                        },
                      ],
                      content: [
                        {
                          id: "content-model-answer-001",
                          name: "Model Answer for Applied Mathematics Assignment",
                          redirectLink: "https://example.com/model-answer",
                          description:
                            "A comprehensive model answer for the Applied Mathematics assignment.",
                        },
                        {
                          id: "content-question-paper-001",
                          name: "Previous Year Question Paper",
                          redirectLink: "https://example.com/question-paper",
                          description:
                            "Question paper from last year's exam for Applied Mathematics.",
                        },
                      ],
                    },
                    {
                      id: "sub-basic-electronics",
                      name: "Basic Electronics",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-electronics-components-signals-001",
                          chapterName: "Electronics Components & Signals",
                          chapterNumber: 1,
                          notionDocId: "doc-electronics-components-signals",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL543456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-diodes-applications-002",
                          chapterName: "Diodes and Their Applications",
                          chapterNumber: 2,
                          notionDocId: "doc-diodes-applications",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL543456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-bipolar-junction-transistor-003",
                          chapterName: "Bipolar Junction Transistor",
                          chapterNumber: 3,
                          notionDocId: "doc-bipolar-junction-transistor",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL543456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-field-effect-transistor-004",
                          chapterName: "Field Effect Transistor",
                          chapterNumber: 4,
                          notionDocId: "doc-field-effect-transistor",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL543456784",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-sensors-transducers-005",
                          chapterName: "Sensors and Transducers",
                          chapterNumber: 5,
                          notionDocId: "doc-sensors-transducers",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL543456785",
                          isNotesComplete: false,
                        },
                      ],
                      content: [
                        {
                          id: "content-model-answer-001",
                          name: "Model Answer for Basic Electronics Assignment",
                          redirectLink: "https://example.com/model-answer",
                          description:
                            "A comprehensive model answer for the Basic Electronics assignment.",
                        },
                        {
                          id: "content-question-paper-001",
                          name: "Previous Year Question Paper",
                          redirectLink: "https://example.com/question-paper",
                          description:
                            "Question paper from last year's exam for Basic Electronics.",
                        },
                      ],
                    },
                    {
                      id: "sub-programming-in-c",
                      name: "Programming in C",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-program-logic-development-001",
                          chapterName: "Program Logic Development",
                          chapterNumber: 1,
                          notionDocId: "doc-program-logic-development",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL643456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-basics-c-programming-002",
                          chapterName: "Basics of C Programming",
                          chapterNumber: 2,
                          notionDocId: "doc-basics-c-programming",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL643456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-control-structures-003",
                          chapterName: "Control Structures",
                          chapterNumber: 3,
                          notionDocId: "doc-control-structures",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL643456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-arrays-structures-004",
                          chapterName: "Arrays and Structures",
                          chapterNumber: 4,
                          notionDocId: "doc-arrays-structures",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL643456784",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-functions-005",
                          chapterName: "Functions",
                          chapterNumber: 5,
                          notionDocId: "doc-functions",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL643456785",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-pointers-006",
                          chapterName: "Pointers",
                          chapterNumber: 6,
                          notionDocId: "doc-pointers",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL643456786",
                          isNotesComplete: false,
                        },
                      ],
                      content: [
                        {
                          id: "content-model-answer-001",
                          name: "Model Answer for Programming in C Assignment",
                          redirectLink: "https://example.com/model-answer",
                          description:
                            "A comprehensive model answer for the Programming in C assignment.",
                        },
                        {
                          id: "content-question-paper-001",
                          name: "Previous Year Question Paper",
                          redirectLink: "https://example.com/question-paper",
                          description:
                            "Question paper from last year's exam for Programming in C.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "sem-3",
                  number: 3,
                  subjects: [
                    {
                      id: "sub-oop-cpp",
                      name: "Object Oriented Programming using C++",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-oop-principles-001",
                          chapterName:
                            "Principles of Object Oriented Programming",
                          chapterNumber: 1,
                          notionDocId: "doc-oop-principles",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL723456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-classes-objects-002",
                          chapterName: "Classes and Objects",
                          chapterNumber: 2,
                          notionDocId: "doc-classes-objects",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL723456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-inheritance-003",
                          chapterName: "Inheritance Extending Classes",
                          chapterNumber: 3,
                          notionDocId: "doc-inheritance",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL723456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-pointers-polymorphism-004",
                          chapterName: "Pointers and Polymorphism in C++",
                          chapterNumber: 4,
                          notionDocId: "doc-pointers-polymorphism",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL723456784",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-working-with-files-005",
                          chapterName: "Working with Files",
                          chapterNumber: 5,
                          notionDocId: "doc-working-with-files",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL723456785",
                          isNotesComplete: false,
                        },
                      ],
                      content: [
                        {
                          id: "content-model-answer-oop-001",
                          name: "Model Answer for Object Oriented Programming using C++",
                          redirectLink: "https://example.com/model-answer-oop",
                          description:
                            "A comprehensive model answer for OOP using C++ assignment.",
                        },
                        {
                          id: "content-question-paper-oop-001",
                          name: "Previous Year Question Paper",
                          redirectLink:
                            "https://example.com/question-paper-oop",
                          description:
                            "Question paper from last year's exam for OOP using C++.",
                        },
                      ],
                    },
                    {
                      id: "sub-data-structure-c",
                      name: "Data Structure Using C",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-intro-data-structures-001",
                          chapterName: "Introduction to Data Structures",
                          chapterNumber: 1,
                          notionDocId: "doc-intro-data-structures",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL823456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-searching-sorting-002",
                          chapterName: "Searching and Sorting",
                          chapterNumber: 2,
                          notionDocId: "doc-searching-sorting",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL823456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-stack-queues-003",
                          chapterName: "Stack and Queues",
                          chapterNumber: 3,
                          notionDocId: "doc-stack-queues",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL823456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-linked-lists-004",
                          chapterName: "Linked Lists",
                          chapterNumber: 4,
                          notionDocId: "doc-linked-lists",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL823456784",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-trees-graphs-005",
                          chapterName: "Trees and Graphs",
                          chapterNumber: 5,
                          notionDocId: "doc-trees-graphs",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL823456785",
                          isNotesComplete: false,
                        },
                      ],
                      content: [
                        {
                          id: "content-model-answer-data-structure-001",
                          name: "Model Answer for Data Structure Using C",
                          redirectLink:
                            "https://example.com/model-answer-data-structure",
                          description:
                            "A comprehensive model answer for Data Structure using C.",
                        },
                        {
                          id: "content-question-paper-data-structure-001",
                          name: "Previous Year Question Paper",
                          redirectLink:
                            "https://example.com/question-paper-data-structure",
                          description:
                            "Question paper from last year's exam for Data Structure using C.",
                        },
                      ],
                    },
                    {
                      id: "sub-computer-graphics",
                      name: "Computer Graphics",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-basics-computer-graphics-001",
                          chapterName: "Basics of Computer Graphics",
                          chapterNumber: 1,
                          notionDocId: "doc-basics-computer-graphics",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL923456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-raster-scan-graphics-002",
                          chapterName: "Raster Scan Graphics",
                          chapterNumber: 2,
                          notionDocId: "doc-raster-scan-graphics",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL923456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-overview-transformations-003",
                          chapterName: "Overview of Transformations",
                          chapterNumber: 3,
                          notionDocId: "doc-overview-transformations",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL923456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-windowing-clipping-004",
                          chapterName: "Windowing and Clipping",
                          chapterNumber: 4,
                          notionDocId: "doc-windowing-clipping",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL923456784",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-introduction-curves-005",
                          chapterName: "Introduction to Curves",
                          chapterNumber: 5,
                          notionDocId: "doc-introduction-curves",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL923456785",
                          isNotesComplete: false,
                        },
                      ],
                      content: [
                        {
                          id: "content-model-answer-computer-graphics-001",
                          name: "Model Answer for Computer Graphics",
                          redirectLink:
                            "https://example.com/model-answer-computer-graphics",
                          description:
                            "A comprehensive model answer for Computer Graphics.",
                        },
                        {
                          id: "content-question-paper-computer-graphics-001",
                          name: "Previous Year Question Paper",
                          redirectLink:
                            "https://example.com/question-paper-computer-graphics",
                          description:
                            "Question paper from last year's exam for Computer Graphics.",
                        },
                      ],
                    },
                    {
                      id: "sub-database-management",
                      name: "Database Management System",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-db-system-concepts-001",
                          chapterName: "Database System Concepts",
                          chapterNumber: 1,
                          notionDocId: "doc-db-system-concepts",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL103456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-relational-data-model-002",
                          chapterName: "Relational Data Model",
                          chapterNumber: 2,
                          notionDocId: "doc-relational-data-model",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL103456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-sql-performance-tuning-003",
                          chapterName:
                            "Interactive SQL and Advance SQL: SQL Performance Tuning",
                          chapterNumber: 3,
                          notionDocId: "doc-sql-performance-tuning",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL103456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-pl-sql-programming-004",
                          chapterName: "PL/SQL Programming",
                          chapterNumber: 4,
                          notionDocId: "doc-pl-sql-programming",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL103456784",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-db-security-transaction-005",
                          chapterName:
                            "Database Security and Transaction Processing",
                          chapterNumber: 5,
                          notionDocId: "doc-db-security-transaction",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL103456785",
                          isNotesComplete: false,
                        },
                      ],
                      content: [
                        {
                          id: "content-model-answer-database-management-001",
                          name: "Model Answer for Database Management System",
                          redirectLink:
                            "https://example.com/model-answer-database-management",
                          description:
                            "A comprehensive model answer for Database Management System.",
                        },
                        {
                          id: "content-question-paper-database-management-001",
                          name: "Previous Year Question Paper",
                          redirectLink:
                            "https://example.com/question-paper-database-management",
                          description:
                            "Question paper from last year's exam for Database Management System.",
                        },
                      ],
                    },
                    {
                      id: "sub-digital-techniques",
                      name: "Digital Techniques",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-number-system-001",
                          chapterName: "Number System",
                          chapterNumber: 1,
                          notionDocId: "doc-number-system",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL113456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-logic-gates-families-002",
                          chapterName: "Logic Gates and Logic Families",
                          chapterNumber: 2,
                          notionDocId: "doc-logic-gates-families",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL113456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-combinational-logic-003",
                          chapterName: "Combinational Logic Circuits",
                          chapterNumber: 3,
                          notionDocId: "doc-combinational-logic",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL113456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-sequential-logic-004",
                          chapterName: "Sequential Logic Circuits",
                          chapterNumber: 4,
                          notionDocId: "doc-sequential-logic",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL113456784",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-data-converters-plds-005",
                          chapterName: "Data Converters and PLDs",
                          chapterNumber: 5,
                          notionDocId: "doc-data-converters-plds",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL113456785",
                          isNotesComplete: false,
                        },
                      ],
                      content: [
                        {
                          id: "content-model-answer-digital-techniques-001",
                          name: "Model Answer for Digital Techniques",
                          redirectLink:
                            "https://example.com/model-answer-digital-techniques",
                          description:
                            "A comprehensive model answer for Digital Techniques.",
                        },
                        {
                          id: "content-question-paper-digital-techniques-001",
                          name: "Previous Year Question Paper",
                          redirectLink:
                            "https://example.com/question-paper-digital-techniques",
                          description:
                            "Question paper from last year's exam for Digital Techniques.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "sem-4",
                  number: 4,
                  subjects: [
                    {
                      id: "sub-java-prog",
                      name: "Java Programming",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-java-syntax-001",
                          chapterName: "Basic Syntactical Constructs in Java",
                          chapterNumber: 1,
                          notionDocId: "doc-java-syntax",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456789",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-java-derived-002",
                          chapterName: "Derived Syntactical Constructs in Java",
                          chapterNumber: 2,
                          notionDocId: "doc-java-derived",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456780",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-java-inheritance-003",
                          chapterName: "Inheritance, Interface, and Package",
                          chapterNumber: 3,
                          notionDocId: "doc-java-inheritance",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-java-exceptions-004",
                          chapterName: "Exception Handling and Multithreading",
                          chapterNumber: 4,
                          notionDocId: "doc-java-exceptions",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-java-applets-005",
                          chapterName: "Java Applets and Graphics Programming",
                          chapterNumber: 5,
                          notionDocId: "doc-java-applets",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-java-io-006",
                          chapterName: "Managing Input/Output/Files in Java",
                          chapterNumber: 6,
                          notionDocId: "doc-java-io",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456784",
                          isNotesComplete: false,
                        },
                      ],
                    },
                    {
                      id: "sub-software-eng",
                      name: "Software Engineering",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-se-process-001",
                          chapterName: "Software Development Process",
                          chapterNumber: 1,
                          notionDocId: "doc-se-process",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456789",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-se-requirement-002",
                          chapterName: "Software Requirement Engineering",
                          chapterNumber: 2,
                          notionDocId: "doc-se-requirement",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456780",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-se-design-003",
                          chapterName: "Software Modeling and Design",
                          chapterNumber: 3,
                          notionDocId: "doc-se-design",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-se-estimation-004",
                          chapterName: "Software Project Estimation",
                          chapterNumber: 4,
                          notionDocId: "doc-se-estimation",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-se-management-005",
                          chapterName:
                            "Software Project Management and Quality Assurance",
                          chapterNumber: 5,
                          notionDocId: "doc-se-management",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456783",
                          isNotesComplete: false,
                        },
                      ],
                    },
                    {
                      id: "sub-data-comm",
                      name: "Data Communication and Computer Networks",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-dccn-fundamentals-001",
                          chapterName:
                            "Fundamentals of Data Communication and Computer Networks",
                          chapterNumber: 1,
                          notionDocId: "doc-dccn-fundamentals",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456789",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-dccn-media-002",
                          chapterName: "Transmission Media and Switching",
                          chapterNumber: 2,
                          notionDocId: "doc-dccn-media",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456780",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-dccn-error-003",
                          chapterName:
                            "Error Detection, Correction, and Wireless Communication",
                          chapterNumber: 3,
                          notionDocId: "doc-dccn-error",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-dccn-topologies-004",
                          chapterName: "Network Topologies and Network Devices",
                          chapterNumber: 4,
                          notionDocId: "doc-dccn-topologies",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-dccn-models-005",
                          chapterName: "Reference Models",
                          chapterNumber: 5,
                          notionDocId: "doc-dccn-models",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456783",
                          isNotesComplete: false,
                        },
                      ],
                    },
                    {
                      id: "sub-microprocessor",
                      name: "Microprocessor",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-mp-8086-001",
                          chapterName: "8086 - 16 Bit Microprocessor",
                          chapterNumber: 1,
                          notionDocId: "doc-mp-8086",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456789",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-mp-assembly-002",
                          chapterName:
                            "The Art of Assembly Language Programming",
                          chapterNumber: 2,
                          notionDocId: "doc-mp-assembly",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456780",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-mp-instruction-003",
                          chapterName: "Instruction Set of 8086 Microprocessor",
                          chapterNumber: 3,
                          notionDocId: "doc-mp-instruction",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-mp-assemblyprog-004",
                          chapterName: "Assembly Language Programming",
                          chapterNumber: 4,
                          notionDocId: "doc-mp-assemblyprog",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-mp-macro-005",
                          chapterName: "Procedure and Macro",
                          chapterNumber: 5,
                          notionDocId: "doc-mp-macro",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456783",
                          isNotesComplete: false,
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "sem-5",
                  number: 5,
                  subjects: [
                    {
                      id: "sub-operating-systems",
                      name: "Operating Systems",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-os-overview-001",
                          chapterName: "Overview of Operating System",
                          chapterNumber: 1,
                          notionDocId: "doc-os-overview",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456789",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-os-services-002",
                          chapterName:
                            "Services and Components of Operating System",
                          chapterNumber: 2,
                          notionDocId: "doc-os-services",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456780",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-os-process-003",
                          chapterName: "Process Management",
                          chapterNumber: 3,
                          notionDocId: "doc-os-process",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-os-cpu-004",
                          chapterName: "CPU Scheduling and Algorithms",
                          chapterNumber: 4,
                          notionDocId: "doc-os-cpu",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-os-memory-005",
                          chapterName: "Memory Management",
                          chapterNumber: 5,
                          notionDocId: "doc-os-memory",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-os-file-006",
                          chapterName: "File Management",
                          chapterNumber: 6,
                          notionDocId: "doc-os-file",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456784",
                          isNotesComplete: false,
                        },
                      ],
                    },
                    {
                      id: "sub-adv-java",
                      name: "Advanced Java Programming",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-java-awt-001",
                          chapterName: "Abstract Windowing Toolkit (AWT)",
                          chapterNumber: 1,
                          notionDocId: "doc-java-awt",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456789",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-java-swings-002",
                          chapterName: "Swings",
                          chapterNumber: 2,
                          notionDocId: "doc-java-swings",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456780",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-java-event-003",
                          chapterName: "Event Handling",
                          chapterNumber: 3,
                          notionDocId: "doc-java-event",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-java-networking-004",
                          chapterName: "Networking",
                          chapterNumber: 4,
                          notionDocId: "doc-java-networking",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-java-database-005",
                          chapterName: "Interacting with Database",
                          chapterNumber: 5,
                          notionDocId: "doc-java-database",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-java-servlets-006",
                          chapterName: "Servlets",
                          chapterNumber: 6,
                          notionDocId: "doc-java-servlets",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456784",
                          isNotesComplete: false,
                        },
                      ],
                    },
                    {
                      id: "sub-client-side-scripting",
                      name: "Client Side Scripting",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-js-basics-001",
                          chapterName: "Basics of JavaScript Programming",
                          chapterNumber: 1,
                          notionDocId: "doc-js-basics",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456789",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-js-array-002",
                          chapterName: "Array, Function, and String",
                          chapterNumber: 2,
                          notionDocId: "doc-js-array",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456780",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-js-form-003",
                          chapterName: "Form and Event Handling",
                          chapterNumber: 3,
                          notionDocId: "doc-js-form",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-js-cookies-004",
                          chapterName: "Cookies and Browser Data",
                          chapterNumber: 4,
                          notionDocId: "doc-js-cookies",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-js-regex-005",
                          chapterName: "Regular Expression, Rollover & Frames",
                          chapterNumber: 5,
                          notionDocId: "doc-js-regex",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-js-menus-006",
                          chapterName:
                            "Menus, Navigation, and Web Page Protection",
                          chapterNumber: 6,
                          notionDocId: "doc-js-menus",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456784",
                          isNotesComplete: false,
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "sem-6",
                  number: 6,
                  subjects: [
                    {
                      id: "sub-python-programming",
                      name: "Programming with Python",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-python-intro-001",
                          chapterName:
                            "Introduction and Syntax of Python Program",
                          chapterNumber: 1,
                          notionDocId: "doc-python-intro",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456789",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-python-operators-002",
                          chapterName:
                            "Python Operators and Control Flow Statements",
                          chapterNumber: 2,
                          notionDocId: "doc-python-operators",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456780",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-python-data-structures-003",
                          chapterName: "Data Structures in Python",
                          chapterNumber: 3,
                          notionDocId: "doc-python-data-structures",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-python-functions-004",
                          chapterName:
                            "Python Functions, Modules, and Packages",
                          chapterNumber: 4,
                          notionDocId: "doc-python-functions",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-python-oop-005",
                          chapterName: "Object Oriented Programming in Python",
                          chapterNumber: 5,
                          notionDocId: "doc-python-oop",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-python-file-006",
                          chapterName:
                            "File I/O Handling and Exception Handling",
                          chapterNumber: 6,
                          notionDocId: "doc-python-file",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456784",
                          isNotesComplete: false,
                        },
                      ],
                    },
                    {
                      id: "sub-mobile-app-development",
                      name: "Mobile Application Development",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-mobile-android-001",
                          chapterName: "Android and its Tools",
                          chapterNumber: 1,
                          notionDocId: "doc-mobile-android-tools",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456789",
                          isNoteComplete: false,
                        },
                        {
                          id: "notes-mobile-installation-002",
                          chapterName:
                            "Installation and Configuration of Android",
                          chapterNumber: 2,
                          notionDocId: "doc-mobile-installation",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456780",
                          isNoteComplete: false,
                        },
                        {
                          id: "notes-mobile-ui-003",
                          chapterName: "UI Components and Layouts",
                          chapterNumber: 3,
                          notionDocId: "doc-mobile-ui-components",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456781",
                          isNoteComplete: false,
                        },
                        {
                          id: "notes-mobile-ui-design-004",
                          chapterName: "Designing User Interface With View",
                          chapterNumber: 4,
                          notionDocId: "doc-mobile-ui-design",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456782",
                          isNoteComplete: false,
                        },
                        {
                          id: "notes-mobile-multimedia-005",
                          chapterName: "Activity and Multimedia with Databases",
                          chapterNumber: 5,
                          notionDocId: "doc-mobile-multimedia",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456783",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-mobile-security-006",
                          chapterName: "Security and Application Deployment",
                          chapterNumber: 6,
                          notionDocId: "doc-mobile-security",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456784",
                          isNoteComplete: false,
                        },
                      ],
                    },
                    {
                      id: "sub-php-web-dev",
                      name: "Web Based Application Development Using PHP",
                      isNotesAvailable: false,
                      notes: [
                        {
                          id: "notes-php-expressions-001",
                          chapterName: "Expression & Control Statements in PHP",
                          chapterNumber: 1,
                          notionDocId: "doc-php-expressions",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456789",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-php-arrays-002",
                          chapterName: "Arrays, Functions, and Graphics",
                          chapterNumber: 2,
                          notionDocId: "doc-php-arrays",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456780",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-php-oop-003",
                          chapterName: "Apply Object Oriented Concepts in PHP",
                          chapterNumber: 3,
                          notionDocId: "doc-php-oop",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456781",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-php-forms-004",
                          chapterName: "Creating and Validating Forms",
                          chapterNumber: 4,
                          notionDocId: "doc-php-forms",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456782",
                          isNotesComplete: false,
                        },
                        {
                          id: "notes-php-database-005",
                          chapterName: "Database Operations",
                          chapterNumber: 5,
                          notionDocId: "doc-php-database",
                          youtubePlaylistLink:
                            "https://youtube.com/playlist?list=PL123456783",
                          isNotesComplete: false,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
  },
];
