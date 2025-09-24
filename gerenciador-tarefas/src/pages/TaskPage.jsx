import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="bg-slate-100 p-1 rounded-md mr-4 absolute left-0"
          >
            <ChevronLeftIcon />
          </button>

          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1>
        </div>

        <div className="p-6 bg-slate-200 rounded-md shadow flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className=" text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
