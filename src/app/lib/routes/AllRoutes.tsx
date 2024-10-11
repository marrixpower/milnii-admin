import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

export const AllRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}>
          {route.children?.map((child, childIndex) =>
            child.index ? (
              <Route
                key={`${index}-${childIndex}`}
                index={true}
                element={child.element}
              />
            ) : (
              <Route
                key={`${index}-${childIndex}`}
                path={child.path}
                element={child.element}
              >
                {child.children?.map((grandchild, grandchildIndex) =>
                  grandchild.index ? (
                    <Route
                      key={`${index}-${childIndex}-${grandchildIndex}`}
                      index={true}
                      element={grandchild.element}
                    />
                  ) : (
                    <Route
                      key={`${index}-${childIndex}-${grandchildIndex}`}
                      path={grandchild.path}
                      element={grandchild.element}
                    ></Route>
                  )
                )}
              </Route>
            )
          )}
        </Route>
      ))}
    </Routes>
  );
};
