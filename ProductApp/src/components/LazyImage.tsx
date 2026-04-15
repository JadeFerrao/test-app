import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { theme } from '../theme';
import { Container, StyledImage, Placeholder, ErrorBox, ErrorIcon } from './LazyImage.styles';

interface LazyImageProps {
  uri: string;
  width: number | string;
  height: number | string;
  borderRadius?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({ uri, width, height, borderRadius = 0 }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Container width={width} height={height} borderRadius={borderRadius}>
      {loading && (
        <Placeholder>
          <ActivityIndicator size="small" color={theme.colors.primary} />
        </Placeholder>
      )}
      {!error ? (
        <StyledImage
          source={{ uri }}
          borderRadius={borderRadius}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          resizeMode="cover"
        />
      ) : (
        <ErrorBox>
          <ErrorIcon />
        </ErrorBox>
      )}
    </Container>
  );
};

export default LazyImage;

