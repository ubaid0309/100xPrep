export const data = [
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
                              isNoteComplete: false,
                            },
                            {
                              id: "notes-comprehenstion-001",
                              chapterName: "Comprehenstion",
                              chapterNumber: 2,
                              notionDocId: "doc-comprehenstion",
                              youtubePlaylistLink:
                                "https://youtube.com/playlist?list=PL123456789",
                              isNoteComplete: false,
                            },
                            {
                              id: "notes-paragraph-003",
                              chapterName: "Paragraph and Dialog Writing",
                              chapterNumber: 3,
                              notionDocId: "doc-paragraph-dialog-writing",
                              youtubePlaylistLink:
                                "https://youtube.com/playlist?list=PL123456780",
                              isNoteComplete: false,
                            },
                            {
                              id: "notes-vocab-004",
                              chapterName: "Vocabulary Building",
                              chapterNumber: 4,
                              notionDocId: "doc-vocabulary-building",
                              youtubePlaylistLink:
                                "https://youtube.com/playlist?list=PL123456781",
                              isNoteComplete: false,
                            },
                            {
                              id: "notes-speeches-005",
                              chapterName: "Speeches",
                              chapterNumber: 5,
                              notionDocId: "doc-speeches",
                              youtubePlaylistLink:
                                "https://youtube.com/playlist?list=PL123456782",
                              isNoteComplete: false,
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
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  },
];
