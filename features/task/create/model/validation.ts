import * as Yup from "yup";
import {
  TASK_CATEGORY,
  TASK_PRIORITY,
  TASK_STATUS,
} from "@/features/task/create/const/task";

export const CreateTaskSchema = Yup.object().shape({
  title: Yup.string().required().min(2).max(60),
  deadlineDate: Yup.string().optional().nullable(),
  deadlineTime: Yup.string().nullable(),
  isPinned: Yup.boolean(),
  description: Yup.string().max(100),
  priority: Yup.string().oneOf(TASK_PRIORITY).nullable(),
  category: Yup.string().oneOf(TASK_CATEGORY).nullable(),
  status: Yup.string().oneOf(TASK_STATUS),
});
