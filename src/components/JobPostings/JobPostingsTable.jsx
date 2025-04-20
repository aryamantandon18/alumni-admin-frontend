import React, { useMemo, useCallback } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Paper, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteJobPosting } from '../../apis/JobPostingsApi';

const JobPostingsTable = ({ data = [], onDelete }) => { // Default data to an empty array
  const navigate = useNavigate();

  const handleUpdate = useCallback(
    (row) => {
      navigate(`/editJobPosting/${row?.jobsPostingId}`);
    },
    [navigate]
  );

  const handleRowClick = useCallback(
    (row) => {
      navigate(`/viewJobPosting/${row.original.jobsPostingId}`);
    },
    [navigate]
  );

  const handleDelete = async (id) => {
    try {
      await deleteJobPosting(id);
      onDelete(id);
    } catch (error) {
      console.error('Failed to delete job posting:', error);
    }
  };

  const columns = useMemo(
    () => [
      { accessorKey: "jobTitle", header: "Job Title", enableSorting: true },
      { accessorKey: "companyName", header: "Company", enableSorting: true },
      { accessorKey: "companyLocation", header: "Location", enableSorting: true },
      { accessorKey: "jobMode", header: "Mode", enableSorting: true },
      { accessorKey: "jobType", header: "Type", enableSorting: true },
      { accessorKey: "jobCategory", header: "Category", enableSorting: true },
      {
        accessorKey: "expectedSalary",
        header: "Salary",
        enableSorting: true,
      },
      {
        accessorKey: "applyLink",
        header: "Apply Link",
        Cell: ({ cell }) => (
          <a href={cell.getValue()} target="_blank" rel="noopener noreferrer">
            Apply
          </a>
        ),
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        enableSorting: true,
        Cell: ({ cell }) => new Date(cell.getValue()).toLocaleDateString(),
      },
      {
        accessorKey: "updatedAt",
        header: "Updated At",
        enableSorting: true,
        Cell: ({ cell }) => new Date(cell.getValue()).toLocaleDateString(),
      },
      {
        accessorKey: "actions",
        header: "Actions",
        Cell: ({ row }) => (
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <IconButton
              color="primary"
              onClick={(e) => {
                e.stopPropagation();
                handleUpdate(row.original);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(row.original.jobsPostingId);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ),
      },
    ],
    [handleUpdate, onDelete]
  );

  const table = useMaterialReactTable({
    data,
    columns,
    enableSorting: true,
    enablePagination: true,
    initialState: { pagination: { pageIndex: 0, pageSize: 5 } },
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => handleRowClick(row),
      style: { cursor: "pointer" },
    }),
  });

  return (
    <Paper sx={{ padding: 2 }}>
      <MaterialReactTable table={table} />
    </Paper>
  );
};

export default JobPostingsTable;