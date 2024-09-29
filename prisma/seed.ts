import { prisma } from "./prisma";

async function main() {
  try {
    await prisma.course.create({
      data: {
        id: "uuid-generated-course", // Replace with actual UUID or let Prisma auto-generate it
        name: "DIPLOMA",
        branches: {
          create: {
            id: "uuid-generated-branch", // Replace with actual UUID or let Prisma auto-generate it
            name: "Computer Engineering",
            semesters: {
              create: {
                id: "uuid-generated-semester", // Replace with actual UUID or let Prisma auto-generate it
                number: 1,
                subjects: {
                  create: {
                    id: "uuid-generated-subject", // Replace with actual UUID or let Prisma auto-generate it
                    name: "Introduction to Programming",
                    notes: {
                      create: {
                        id: "uuid-generated-notes", // Replace with actual UUID or let Prisma auto-generate it
                        chapterName: "Introduction to C",
                        chapterNumber: 1,
                        notionDocId: "notion-doc-123",
                        youtubePlaylistLink: "https://youtube.com/playlist1",
                      },
                    },
                    content: {
                      create: [
                        {
                          id: "uuid-generated-content-1", // Replace with actual UUID or let Prisma auto-generate it
                          name: "Model Answer",
                          redirectLink: "https://example.com/model-answer",
                          description: "Answers for the first semester exams",
                        },
                        {
                          id: "uuid-generated-content-2", // Replace with actual UUID or let Prisma auto-generate it
                          name: "Question Paper",
                          redirectLink: "https://example.com/question-paper",
                          description: "Previous year question papers",
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
}

main()
  .catch((e) => {
    console.error("Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
