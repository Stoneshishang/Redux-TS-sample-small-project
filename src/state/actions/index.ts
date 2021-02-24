import { ActionType } from "../action-types";

interface SearchRepoAction {
  type: ActionType.SEARCH_REPO;
}

interface SearchRepoSuccessAction {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

interface SearchRepoErrorAction {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}

export type ActionUnion =
  | SearchRepoAction
  | SearchRepoSuccessAction
  | SearchRepoErrorAction;
