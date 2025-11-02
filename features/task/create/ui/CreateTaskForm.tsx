"use client";

import { Form, Formik } from "formik";
import {
  Button,
  FormInput,
  FormTextarea,
  FormLabel,
  FormSelect,
  FormCheckbox,
} from "@/shared/components/ui";
import { CreateTaskSchema } from "@/features/task/create/model/validation";
import { DeadlinePicker } from "./DeadlinePicker";
import {
  TASK_CATEGORY_MAP,
  TASK_PRIORITY_MAP,
} from "@/features/task/create/const/task";
import { useAppDispatch } from "@/shared/lib/hooks/useAppSelector";
import { createTask } from "@task/model/slice";
import { Status } from "@task/model";

export const CreateTaskForm = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="px-4 py-2">
      <Formik
        validationSchema={CreateTaskSchema}
        initialValues={{
          title: "",
          deadlineTime: "",
          deadlineDate: null,
          priority: null,
          category: null,
          isPinned: false,
          status: "todo" as Status,
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(createTask(values));
          resetForm();
        }}
      >
        {() => (
          <Form className="space-y-2 flex flex-col">
            <FormInput label="Title" name="title" />
            <FormTextarea name={"description"} label="Description" />
            <DeadlinePicker
              dateName={"deadlineDate"}
              timeName={"deadlineTime"}
              label="Deadline"
            />

            <div className=" gap-2">
              <div className="flex justify-between gap-3">
                <div className="flex  flex-col w-1/2">
                  <FormLabel label="Priority" />
                  <FormSelect
                    className="min-w-1/2"
                    name="priority"
                    options={TASK_PRIORITY_MAP}
                    placeholder={"Priority"}
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <FormLabel label="Category" />
                  <FormSelect
                    className=""
                    name="category"
                    options={TASK_CATEGORY_MAP}
                    placeholder="Category"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 my-1 pb-2">
              <FormCheckbox name="isPinned" />
              <FormLabel label="Pin this task ot top of list?" />
            </div>
            <Button type="submit">Create task!</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
