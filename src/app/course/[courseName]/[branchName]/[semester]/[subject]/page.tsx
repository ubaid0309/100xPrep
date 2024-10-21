import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ExternalLink, FileText, Youtube } from "lucide-react";
import { getSemesterSubjects } from "@/lib/actions";

const subjectData = {
  diploma: {
    "computer-engineering": {
      "semester-1": {
        "basic-mathematics": {
          title: "Basic Mathematics",
          chapters: [
            {
              number: 1,
              name: "Algebra Fundamentals",
              notionLink: "https://www.notion.so/chapter1-algebra",
              youtubeLink: "https://www.youtube.com/playlist?list=PLalgebra",
              isNoteComplete: true,
            },
            {
              number: 2,
              name: "Trigonometry Basics",
              notionLink: "https://www.notion.so/chapter2-trigonometry",
              youtubeLink:
                "https://www.youtube.com/playlist?list=PLtrigonometry",
              isNoteComplete: false,
            },
            {
              number: 3,
              name: "Calculus Introduction",
              notionLink: "https://www.notion.so/chapter3-calculus",
              youtubeLink: "https://www.youtube.com/playlist?list=PLcalculus",
              isNoteComplete: true,
            },
          ],
          content: [
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
              redirectLink: "https://example.com/question-paper",
              description: "Question paper from last year's exam for English.",
            },
          ],
        },
        // Add other subjects here
      },
      // Add other semesters here
    },
    // Add other branches here
  },
  // Add degree courses here
};

export default async function SubjectPage({
  params,
}: {
  params: {
    courseName: string;
    branchName: string;
    semester: string;
    subject: string;
  };
}) {
  const {
    courseName: type,
    branchName: branch,
    semester: number,
    subject,
  } = params;

  const subjectInfo = subjectData[type]?.[branch]?.[number]?.[subject];

  const semesterSubjects = await getSemesterSubjects(type, branch, number);
  const subjectDetails = semesterSubjects?.subjects.filter((sub) => {
    return sub.id === "english";
  });
  const sortedSubjects = subjectDetails[0].notes.sort(
    (a, b) => a.chapterNumber - b.chapterNumber
  );
  if (!subjectInfo) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className=" py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link
                href={`/course/${type}/${branch}/semester-${number}`}
                className="inline-flex items-center text-blue-primary hover:text-blue-800"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to All Subjects
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">
              {subjectDetails[0]?.name}
            </h1>

            <p className="text-xl text-center text-gray-500 mb-12">
              Explore the chapters and resources for {subjectDetails[0]?.name}.
            </p>
            <div className="space-y-8">
              {sortedSubjects.map((note) => (
                <ChapterCard key={note.chapterNumber} {...note} />
              ))}
            </div>
            {subjectInfo.content && subjectInfo.content.length > 0 && (
              <div className="mt-12 space-y-8">
                <h2 className="text-2xl font-bold mb-4">
                  Additional Resources
                </h2>
                {subjectInfo.content.map((item) => (
                  <ContentCard key={item.id} {...item} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function ChapterCard({
  chapterNumber,
  chapterName,
  notionDocId,
  youtubePlaylistLink,
  isNoteComplete,
}) {
  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Chapter {chapterNumber}: {chapterName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <Badge
            variant={isNoteComplete ? "default" : "secondary"}
            className="cursor-pointer data-[s]:"
          >
            {isNoteComplete ? "Notes Available" : "Notes Not Complete"}
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            disabled={true}
            asChild={isNoteComplete}
            className="w-full sm:w-auto"
          >
            <Link
              href={`/notes/${notionDocId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <FileText className="mr-2 h-4 w-4" />
              View Notes
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link
              href={youtubePlaylistLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="mr-2 h-4 w-4" />
              Watch YouTube Playlist
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
function ContentCard({ name, redirectLink, description }) {
  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link href={redirectLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Resource
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
