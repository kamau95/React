import useForm from "react-hook-form";
import React from "react";
import {useEffect } from "react";

export default function ProjectForm({ initialData, onSave, onCancel }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //when initialData changes prefill form
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset();
    }
  }, [initialData, reset]);

  const onSubmit = (data) => {
    const payload = {
      ...data,
      budget: Number(data.budget), //convert to number
      active: data.active === "true",
    };
    onSave(payload);
    reset(); //reset only when adding
  };

  //what is rendered
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Project</label>
        <input
          type="text"
          {...register("project", { required: "project name is required" })}
        />
        {errors.project && <p>{errors.project.message}</p>}
      </div>

      <div>
        <label>Description</label>
        <textarea
          type="text"
          {...register("description", {
            maxLength: { value: 200, message: "Description is too long" },
          })}
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div>
        <label>Budget</label>
        <input
          type="number"
          {...register("budget", {
            required: "budget is required",
            valueAsNumber: true,
            min: { value: 1, message: "Budget must be greater than zero" },
          })}
        />
        {errors.budget && <p>{errors.budget.message}</p>}
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="true"
            {...register("active", { required: "please select status" })}
          />
          Active
        </label>

        <label>
          <input
            type="radio"
            value="false"
            {...register("active", { required: "please select status" })}
          />
          Inactive
        </label>
        {errors.active && <p>{errors.active.message}</p>}
      </div>

      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
