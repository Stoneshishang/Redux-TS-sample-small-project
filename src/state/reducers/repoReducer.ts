interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RepoState, action: any): RepoState => {
  switch (action.type) {
    case 'search_repo':
      return { loading: true, error: null, data: [] };
    case 'search_repo_success':
      return { loading: false, error: null, data: action.payload };
    case 'search_repo_error':
      return {loading: false, error: action.payload, data: []}
    default:
      return state;
  }
}

export default reducer;