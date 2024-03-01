# first line: 1
@memory.cache
def grid_search_fit(pipeline, param_grid, X_train, y_train):
    cv = StratifiedKFold(n_splits=3, shuffle=True, random_state=42)
    grid_search = GridSearchCV(pipeline, param_grid, cv=cv, scoring=make_scorer(pr_auc_scorer, needs_proba=True), verbose=3, n_jobs=-1)
    grid_search.fit(X_train, y_train)
    return grid_search
