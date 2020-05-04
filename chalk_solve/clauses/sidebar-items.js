initSidebarItems({"fn":[["match_alias_ty",""],["match_struct",""],["match_ty","Examine `T` and push clauses that may be relevant to proving the following sorts of goals (and maybe others):"],["match_type_name",""],["program_clauses_for_env",""],["program_clauses_for_goal","Given some goal `goal` that must be proven, along with its `environment`, figures out the program clauses that apply to this goal from the Rust program. So for example if the goal is `Implemented(T: Clone)`, then this function might return clauses derived from the trait `Clone` and its impls."],["program_clauses_that_could_match","Returns a set of program clauses that could possibly match `goal`. This can be any superset of the correct set, but the more precise you can make it, the more efficient solving will be."],["push_auto_trait_impls","For auto-traits, we generate a default rule for every struct, unless there is a manual impl for that struct given explicitly."],["push_program_clauses_for_associated_type_values_in_impls_of","Generate program clauses from the associated-type values found in impls of the given trait. i.e., if `trait_id` = Iterator, then we would generate program clauses from each `type Item = ...` found in any impls of `Iterator`: which are found in impls. That is, if we are normalizing (e.g.) `<T as Iterator>::Item>`, then search for impls of iterator and, within those impls, for associated type values:"]],"mod":[["builder",""],["builtin_traits",""],["dyn_ty",""],["env_elaborator",""],["generalize","This gets rid of free variables in a type by replacing them by fresh bound ones. We use this when building clauses that contain types passed to `program_clauses`; these may contain variables, and just copying those variables verbatim leads to problems. Instead, we return a slightly more general program clause, with new variables in those places. This can only happen with `dyn Trait` currently; that's the only case where we use the types passed to `program_clauses` in the clauses we generate."],["program_clauses",""]]});