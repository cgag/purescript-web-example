module Example.Main where

import Control.Monad.Eff
import Control.Monad.Eff.Random
import Debug.Trace

foreign import data Alert :: !

foreign import alert
  "function alert(s) { \
  \  return function() { \
  \    window.alert(s); \
  \  }; \
  \};" :: forall r. String -> Eff (alert :: Alert | r) Unit

main = do
  alert "Woooo!"
  rand <- random
  trace $ "hello purescript: " ++ show rand
