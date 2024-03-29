// AWSデプロイrails アプリケーション
const DEFAULT_API_URL = 'http://13.113.10.41/api/v1'

// const DEFtsAULT_API_URL = 'http://localhost:3000/api/v1'

export const taskIndexUrl = `${DEFAULT_API_URL}/tasks`;

export const taskCreateUrl = `${DEFAULT_API_URL}/tasks`;

export const taskUpdataUrl = (taskId) =>
  `${DEFAULT_API_URL}/tasks/${taskId}`;

export const taskDeleteUrl = (taskId) =>
  `${DEFAULT_API_URL}/tasks/${taskId}`;

export const taskEditUrl = (taskId) =>
  `${DEFAULT_API_URL}/tasks/${taskId}`;

export const taskDestroyAllUrl = `${DEFAULT_API_URL}/tasks/destroy_all`;
